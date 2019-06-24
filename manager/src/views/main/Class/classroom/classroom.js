import React, { useState, useEffect } from "react";
import { connect } from 'dva';
import { Modal, Form, Input, Button, Table, message } from 'antd';
import styles from './classroom.scss';

const confirm = Modal.confirm;

function ClassRoom(props) {
    let { roomAll ,deleteClassroom ,addClassroom } = props;
    let { rooms, room, removeClassroom, classroomGood } = props;
    let [showDialog, upDialog] = useState(false);
    let [typeValue, uptypeValue] = useState('');


    useEffect(() => {
        roomAll()
    }, [])

    const columns = [
        {
            title: '教室号',
            dataIndex: 'room_text'
        },
        {
            title: '操作',
            dataIndex: 'room_id',
            render:room_id=>(
                <>
                    <p value={room_id} onClick={()=>{
                        remove(room_id)
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
                deleteClassroom({
                    room_id:operation
                })
            },
            onCancel() {},
        });
    }
    
    useEffect(()=>{
        if(removeClassroom === 1){
            message.success('删除成功')
            roomAll();
        }else if(removeClassroom === -1){
            message.error('删除失败')
        }
    },[removeClassroom])
    
    useEffect(()=>{
        if(classroomGood === 1){
            message.success('添加成功')
            roomAll();
        }else if(classroomGood === -1){
            message.error('添加失败')
        }
    },[classroomGood])

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
    }

    const { getFieldDecorator } = props.form;
    return <div className={styles.wrapper}>
        <h3 className={styles.title}>教室管理</h3>
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
            <Table columns={columns} dataSource={rooms} rowKey={"room_id"}/>
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
