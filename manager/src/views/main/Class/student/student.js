import React,{ useState, useEffect } from 'react';
import { connect  } from 'dva';
import { Form, Button, Select, Input, Table, message  } from 'antd'
import styles from './student.scss';

const { Option } = Select;

function Student(props){
    
    const columns = [
        {
            title: '姓名',
            dataIndex: 'student_name',
            key: 'student_name'
        },
        {
            title: '学号',
            dataIndex: 'student_id',
            key: 'student_id',
        },
        {
            title: '班级',
            dataIndex: 'grade_name',
            key: 'grade_name',
        },
        {
            title: '教室',
            dataIndex: 'room_text',
            key: 'room_text',
        },
        {
            title: '密码',
            dataIndex: 'student_pwd',
            key: 'student_pwd',
        },
        {
            title: '操作',
            dataIndex: '',
            render:val=>(
                <>
                    <span value={val.student_id} onClick={remove}>删除</span>
                </>
            ),
        }
    ]


    let { grade, roomAll, getStudent, changeTypes, deleteStudent } = props;
    let { gradeArr, rooms, students, studentGood } = props;
    let [ arr ] = useState([]);

    useEffect(()=>{
        grade()
    },[])

    useEffect(()=>{
        roomAll()
    },[])

    useEffect(()=>{
        getStudent()
    },[])

    useEffect(()=>{
        if(studentGood === 1){
            message.success('删除成功')
            getStudent();
        }else if(studentGood === -1){
            message.error('删除失败')
        }
    },[studentGood])

    let remove = e =>{
        deleteStudent({
            id:e.target.getAttribute('value')
        })
    }

    let searches = e =>{
        props.form.validateFields((err,value)=>{
            arr=students.filter(item=>item.student_name === value.studentName && 
            item.grade_id === value.classNum && 
            item.room_id === value.classroom)
            if(arr.length){
                arr.map(item=>item.key=item.student_id)
            }
            changeTypes({
                arr
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
        <Table columns={columns} dataSource={students} rowKey={"student_pwd"} pagination={true} />
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
