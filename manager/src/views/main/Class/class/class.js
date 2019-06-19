import React,{ useState, useEffect } from 'react';
import { connect  } from 'dva';
import { Button, Table, Divider, Modal, Form, Select, Input } from 'antd';
import styles from './class.scss';

const { Option } = Select;

function Class(props){

    let { grade, gradeDelete, gradeUpdata, watch, roomAll, addGrade } = props;
    let { gradeArr, datas, rooms } = props.class;
    let { data } = props.view;
    let [ showDialog, upShowDialog ] = useState(false);
    let [ showData, upShowData ] = useState(false);
    let [ getGrade, upGetGrade ] = useState({});
    let [classId,upClassId] = useState('')

    useEffect(()=>{
        grade(),
        watch(),
        roomAll()
    },[])
    
    const columns = [
        {
            title: '班级名',
            dataIndex: 'class',
            key: 'class',
        },
        {
            title: '课程名',
            dataIndex: 'subject',
            key: 'subject',
        },
        {
            title: '教室号',
            dataIndex: 'classroom',
            key: 'classroom',
        },
        {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
            render:operation=>(
                <>
                    <span value={operation} onClick={change}>修改</span>
                    <Modal 
                        title="添加班级" 
                        visible={showData}
                        cancelText="取消"
                        okText="提交"
                        onOk={handleRight}
                        onCancel={()=>{
                            upShowData(showData = false)
                        }}>
                            <Form>
                                <Form-Item>
                                    <p className={styles.tip}>*班级名</p>
                                    {
                                        getFieldDecorator('class', {
                                            rules: [{ required: true, message: '班级名' }],
                                        })(
                                            <Input type="text" placeholder={getGrade.grade_name} disabled={true} />,
                                        )
                                    }
                                    <p className={styles.tip}>*教室号</p>
                                    {
                                        getFieldDecorator('classroom', {
                                            rules: [{ required: true, message: '教室号' }],
                                        })(
                                            <Select className={styles.select} style={{width:"100%"}} placeholder={getGrade.room_text}>
                                                {
                                                    rooms && rooms.map(item=>{
                                                        return <Option key={item.room_id} value={item.room_id}>{item.room_text}</Option>
                                                    })
                                                }
                                            </Select>,
                                        )
                                    }
                                    <p className={styles.tip}>*课程名</p>
                                    {
                                        getFieldDecorator('subject', {
                                            rules: [{ required: true, message: '课程名' }],
                                        })(
                                            <Select className={styles.select} placeholder={getGrade.subject_text}>
                                                {
                                                    data && data.map(item=>{
                                                        return <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
                                                    })
                                                }
                                            </Select>,
                                        )
                                    }
                                </Form-Item>
                            </Form>
                        </Modal>
                    <Divider type="vertical" />
                    <span value={operation} onClick={change}>删除</span>
                </>
            ),
        }
    ]

    let handleRight = e =>{
        upShowData(showData = false)
        props.form.validateFields((err,value)=>{
            console.log(value)
            console.log(classId)
            gradeUpdata({
                grade_id:classId,
                subject_id:value.subject,
                room_id:value.classroom
            })    
        })
    }

    let change = e =>{
        if(e.target.innerHTML==='删除'){
            gradeDelete({
                grade_id:e.target.getAttribute('value')
            })    
        }else if(e.target.innerHTML==='修改'){
            upShowData(showData = true)
            grade()
            gradeArr && gradeArr.map(item=>{
                if(item.grade_id === e.target.getAttribute('value')){
                    upGetGrade(getGrade = item)
                }
            })
            upClassId(classId = getGrade.grade_id)
        }
        grade()
    }

    gradeArr && gradeArr.map(item=>{
        let flag = datas.some(val => val.class === item.grade_name);
        if(!flag){
            datas.push({
                key:item.grade_id,
                class:item.grade_name,
                subject:item.subject_text,
                classroom:item.room_text,
                operation:item.grade_id
            })
        }
    })

    let handleOk = e =>{
        props.form.validateFields((err,value)=>{
            addGrade({
                grade_name:value.class,
                room_id:value.classroom,
                subject_id:value.subject
            })
        })
        upShowDialog(showDialog = false)
    }

    let { getFieldDecorator } = props.form;

    return <div className={styles.wrapper}>
        <p className={styles.title}>班级管理</p>
        <div className={styles.wrap}>
            <Button icon="plus" className={styles.btn} onClick={()=>{
                upShowDialog(showDialog = true)
            }}>添加班级</Button>
            <Modal 
            title="添加班级" 
            visible={showDialog}
            cancelText="取消"
            okText="提交"
            onOk={handleOk}
            onCancel={()=>{
                upShowDialog(showDialog = false)
            }}>
                <Form>
                    <Form-Item>
                        <p className={styles.tip}>*班级名</p>
                        {
                            getFieldDecorator('class', {
                                rules: [{ required: true, message: '班级名' }],
                            })(
                                <Input type="text" placeholder="班级名" />,
                            )
                        }
                        <p className={styles.tip}>*教室号</p>
                        {
                            getFieldDecorator('classroom', {
                                rules: [{ required: true, message: '教室号' }],
                            })(
                                <Select className={styles.select} style={{width:"100%"}}>
                                    {
                                        rooms && rooms.map(item=>{
                                            return <Option key={item.room_id} value={item.room_id}>{item.room_text}</Option>
                                        })
                                    }
                                </Select>,
                            )
                        }
                        <p className={styles.tip}>*课程名</p>
                        {
                            getFieldDecorator('subject', {
                                rules: [{ required: true, message: '课程名' }],
                            })(
                                <Select className={styles.select}>
                                    {
                                        data && data.map(item=>{
                                            return <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
                                        })
                                    }
                                </Select>,
                            )
                        }
                    </Form-Item>
                </Form>
            </Modal>
            <Table columns={columns} dataSource={datas} pagination={true} />
        </div>
    </div>
}


const mapStateToProps = state=>{
    return state
}

const mapDisaptchToProps = dispatch=>{
    return {
        grade(){
            dispatch({
                type:"class/grade"
            })
        },
        watch(){
            dispatch({
                type:"view/watch"
            })
        },
        gradeDelete(payload){
            dispatch({
                type:"class/gradeDelete",
                payload
            })
        }, 
        gradeUpdata(payload){
            dispatch({
                type:"class/gradeUpdata",
                payload
            })
        },
        roomAll(){
            dispatch({
                type:"class/roomAll"
            })
        },
        addGrade(payload){
            dispatch({
                type:"class/addGrade",
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Form.create()(Class))
