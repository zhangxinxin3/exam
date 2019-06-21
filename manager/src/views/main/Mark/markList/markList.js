import React,{ useState, useEffect } from 'react';
import { connect  } from 'dva';
import { Table, Form, Input, Select, Button } from 'antd';
import styles from './markList.scss';

const { Option } = Select;

function MarkList(props){
    const columns = [
        {
            title: '班级',
            dataIndex: 'class',
            key: 'class',
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '阅卷状态',
            dataIndex: 'scoringStatus',
            key: 'scoringStatus',
        },
        {
            title: '开始时间',
            dataIndex: 'startTime',
            key: 'startTime',
        },
        {
            title: '结束时间',
            dataIndex: 'endTime',
            key: 'endTime',
        },
        {
            title: '成材率',
            dataIndex: 'yields',
            key: 'yields',
        },
        {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
            render:operation=>(
                <>
                    <span value={operation}>批卷</span>
                </>
            ),
        }
    ]


    let id = props.location.search.split('=')[1];

    let { grade, getList } = props;
    let { gradeArr, children, child } = props;

    let [ gradeName, upGradeName ] = useState('');
    
    useEffect(()=>{
        grade(),
        getList({
            grade_id:id
        })
    },[])

    children && children.map(item=>{
        let flag = child.some(val => val.name === item.student_name);
        console.log(flag)
        if(!flag){
            child.push({
                key:item.student_id,
                class:gradeName,
                name:item.student_name,
                scoringStatus:"未阅",
                startTime:new Date(parseInt(item.start_time)).toLocaleString().replace(/\//g, "-").replace(/上午/g, " "),
                endTime:new Date(parseInt(item.end_time)).toLocaleString().replace(/\//g, "-").replace(/上午/g, " "),
                yields:'-',
                operation:item.student_id
            })
        }
    })

    let { getFieldDecorator } = props.form;

    return <div className={styles.wrapper}>
        <Form className={styles.wrap}>
            <Form-Item class={styles.wrap_item}>
                状态：{
                    getFieldDecorator('classroom', {
                        rules: [{ required: true, message: '请选择教室号' }],
                    })(
                    <Select className={styles.select} placeholder="请选择教室号">
                        <Option key="111">111</Option>
                        {/* {
                            rooms && rooms.map(item=>{
                                return <Option key={ item.room_id } value={ item.room_id }>{ item.room_text }</Option>
                            })
                        } */}
                    </Select>,
                    )
                }
                班级：{
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
                <Button className={styles.ant_btn} icon="search">查询</Button>
            </Form-Item>
        </Form>
        <div className={styles.wrap}>
            <Table columns={columns} dataSource={child} pagination={true} />
        </div>
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
        getList(payload){
            dispatch({
                type:"class/getList",
                payload
            })
        },
        getDetail(payload){
            dispatch({
                type:"class/getDetail",
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Form.create()(MarkList))
