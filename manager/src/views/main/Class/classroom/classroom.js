import React, { useState, useEffect } from "react";
import { connect } from 'dva';
import { Modal, Form, Input, Button, Table } from 'antd';
import styles from './classroom.scss';

const confirm = Modal.confirm;

function ClassRoom(props) {
    let { roomAll ,deleteClassroom ,addClassroom } = props;
    let { rooms,room } = props;
    let [showDialog, upDialog] = useState(false);
    let [typeValue, uptypeValue] = useState('');


    useEffect(() => {
        roomAll()
    }, [])

    const columns = [
        {
            title: '教室号',
            dataIndex: 'classroom'
        },
        {
            title: '操作',
            dataIndex: 'operation',
            render:operation=>(
                <>
                    <p value={operation} onClick={()=>{
                        remove(operation)
                    }}>删除</p>
                </>
            )
        },
    ];

    function remove(operation) {
        confirm({
            title: '确定要删除此教室吗？',
            cancelText:"取消",
            okText:"确定",
            onOk() {
                console.log(operation)
                deleteClassroom({
                    room_id:operation
                })
                return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            },
            onCancel() {},
        });
    }


    rooms && rooms.map(item=>{
        let flag = room.some(val => val.classroom === item.room_text);
        if(!flag){
            room.push({
                key:item.room_id,
                classroom:item.room_text,
                operation:item.room_id
            })
        }
    })

    let handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                uptypeValue(typeValue = values.value)
            }
        });
    };

    let handleOk = e => {
        upDialog(!showDialog)
        addClassroom({
            room_text: typeValue
        })
        roomAll()
    }

    const { getFieldDecorator } = props.form;
    return <div className={styles.wrapper}>
        <h3 level={3} className={styles.tit}>教室管理</h3>
        <div className={styles.wrap}>
            <Button className={styles.btn} onClick={() => upDialog(!showDialog)}>+ 添加教室</Button>
            <Modal
                title="添加班级"
                visible={showDialog}
                okText="确认"
                cancelText="取消"
                onCancel={() => upDialog(!showDialog)}
                onOk={handleOk}
            >
                <Form onChange={handleSubmit} >
                    <Form.Item>
                        <p>教室号：</p>
                        {
                            getFieldDecorator('value', {
                                rules: [{ required: true, message: '教室名 ' }],
                            })(
                                <Input type="text" setfieldsvalue={typeValue} placeholder="教室名" />,
                            )
                        }
                    </Form.Item>
                </Form>
            </Modal>
            <Table columns={columns} dataSource={room}/>
        </div>
    </div>
}

const mapStateToProps = state => {
    return {
        ...state.class
    }
}

const mapDisaptchToProps = dispatch => {
    return {
        roomAll(){
            dispatch({
                type:'class/roomAll'
            })
        },
        deleteClassroom(payload){
            dispatch({
                type:'class/deleteClassroom',
                payload
            })
        },
        addClassroom(payload){
            dispatch({
                type:'class/addClassroom',
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Form.create()(ClassRoom));
