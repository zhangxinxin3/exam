import React,{useEffect} from 'react';
import { connect  } from 'dva';
import { Form, Button, Select, Input, Table, Pagination  } from 'antd'
import styles from './student.scss';

const { Option } = Select;
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
    }
]

const data =[
    {
        key: '1',
        name: 'John Brown',
        studentID:'162231000822',
        class:'1610A',
        classroom:'34313',
        password:'132',
        operation:"删除"
      }
]

function Student(props){

    let { grade, roomAll, getStudent } = props;
    let { gradeArr, rooms, students } = props;

    useEffect(()=>{
        // grade(), 
        // roomAll(), 
        // getStudent()
    },[])

    function onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
    }
    
    let { getFieldDecorator } = props.form;
    return <div className={styles.wrapper}>
        <p className={styles.title}>学生管理</p>
        <Form className={styles.wrap}>
            <Form-Item class={styles.wrap_item}>
                {
                    getFieldDecorator('questionsTypeId', {
                        rules: [{ required: true, message: '请选择教室号' }],
                    })(
                        <Input className={styles.inp} placeholder="输入学生姓名"></Input>,
                    )
                }
                {
                    getFieldDecorator('questionsTypeId', {
                        rules: [{ required: true, message: '请选择教室号' }],
                    })(
                    <Select className={styles.select} placeholder="请选择教室号">
                        <Option key="111">111</Option>
                        {/* {
                            questionArr && questionArr.map(item=>{
                                return <Option key={ item.questions_type_id } value={ item.questions_type_id }>{ item.questions_type_text }</Option>
                            })
                        } */}
                    </Select>,
                    )
                }
                {
                    getFieldDecorator('questionsTypeId', {
                        rules: [{ required: true, message: '班级号' }],
                    })(
                    <Select className={styles.select} placeholder="班级号">
                        <Option key="222">222</Option>
                        {/* {
                            questionArr && questionArr.map(item=>{
                                return <Option key={ item.questions_type_id } value={ item.questions_type_id }>{ item.questions_type_text }</Option>
                            })
                        } */}
                    </Select>,
                    )
                }
                <Button className={styles.ant_btn}>搜索</Button>
                <Button className={styles.ant_btn}>重置</Button>
            </Form-Item>
        </Form>
        <Table columns={columns} dataSource={data} pagination={true} />
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
        }
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Form.create()(Student))
