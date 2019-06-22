import React,{ useState, useEffect } from 'react';
import { connect  } from 'dva';
import { Form, Button, Select, Input, Table, Modal  } from 'antd'
import styles from './student.scss';

const { Option } = Select;
const confirm = Modal.confirm;
function Student(props){
    
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '学号',
            dataIndex: 'studentID',
            key: 'studentID',
        },
        {
            title: '班级',
            dataIndex: 'class',
            key: 'class',
        },
        {
            title: '教室',
            dataIndex: 'classroom',
            key: 'classroom',
        },
        {
            title: '密码',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
            render:operation=>(
                <>
                    <span value={operation} onClick={remove}>删除</span>
                </>
            ),
        }
    ]


    let { grade, roomAll, getStudent, changeTypes, deleteStudent } = props;
    let { gradeArr, rooms, students, types } = props;

    useEffect(()=>{
        grade(), 
        roomAll(), 
        getStudent()
    },[])

    let remove = e =>{
        deleteStudent({
            id:e.target.getAttribute('value')
        })
    }

    if(!types.length){
        students && students.map(item=>{
            let flag = types.some(val => val.key === item.student_id);
            if(!flag){
                types.push({
                    key:item.student_id,
                    name:item.student_name,
                    studentID:item.student_id,
                    class:item.grade_name,
                    classroom:item.room_text,
                    password:item.student_pwd,
                    operation:item.student_id
                })    
            }
            
        })    
    }
    

    let searches = e =>{
        props.form.validateFields((err,value)=>{
            students && students.map(item=>{
                if(item.student_name === value.studentName && 
                item.grade_id === value.classNum && 
                item.room_id === value.classroom){
                    changeTypes({
                        item
                    })
                }
            })
        })
    }
    
    let { getFieldDecorator } = props.form;
    return <div className={styles.wrapper}>
        <p className={styles.title}>学生管理</p>
        <Form className={styles.wrap}>
            <Form-Item class={styles.wrap_item}>
                {
                    getFieldDecorator('studentName', {
                        rules: [{ required: true, message: '输入学生姓名' }],
                    })(
                        <Input className={styles.inp} placeholder="输入学生姓名"></Input>,
                    )
                }
                {
                    getFieldDecorator('classroom', {
                        rules: [{ required: true, message: '请选择教室号' }],
                    })(
                    <Select className={styles.select} placeholder="请选择教室号">
                        {
                            rooms && rooms.map(item=>{
                                return <Option key={ item.room_id } value={ item.room_id }>{ item.room_text }</Option>
                            })
                        }
                    </Select>,
                    )
                }
                {
                    getFieldDecorator('classNum', {
                        rules: [{ required: true, message: '班级号' }],
                    })(
                    <Select className={styles.select} placeholder="班级号">
                        {
                            gradeArr && gradeArr.map(item=>{
                                return <Option key={ item.grade_id } value={ item.grade_id }>{ item.grade_name }</Option>
                            })
                        }
                    </Select>,
                    )
                }
                <Button className={styles.ant_btn} onClick={searches}>搜索</Button>
                <Button className={styles.ant_btn} onClick={()=>{
                    getStudent()
                }}>重置</Button>
            </Form-Item>
        </Form>
        <Table columns={columns} dataSource={types} pagination={true} />
    </div>
}

const mapStateToProps = state=>{
    return {
        ...state.class
    }
}

const mapDisaptchToProps = dispatch=>{
    return {
        grade(){
            dispatch({
                type:"class/grade"
            })
        },
        roomAll(){
            dispatch({
                type:"class/roomAll"
            })
        },
        getStudent(){
            dispatch({
                type:"class/getStudent"
            })
        },
        changeTypes(payload){
            dispatch({
                type:'class/changeTypes',
                payload
            })
        },
        deleteStudent(payload){
            dispatch({
                type:'class/deleteStudent',
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Form.create()(Student))
