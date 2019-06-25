import React, { useState, useEffect } from "react";
import { connect } from 'dva';
import { Form, Select, Button, Table, Icon } from 'antd';
import styles from './examList.scss';

const { Option } = Select;
const columns = [
    {
        title: '试卷信息',
        dataIndex: 'title',
        key: 'title',
        render:title=>(
            <>
                <p>{title}</p>
                {/* <p>考试时间{new Date(parseInt(item.end_time-item.start_time)).toLocaleString()}{item.number}道题 作弊0分</p> */}
            </>
        )
    },
    {
        title: '班级',
        dataIndex: 'grade_name',
        key: 'grade_name',
        render: grade_name => (
            <>
                <p>考试班级</p>
                {
                    grade_name.map((item, index) => {
                        return <span key={index} style={{ fontSize: "12px", marginRight: "8px" }}>{item}</span>
                    })
                }
            </>
        ),
    },
    {
        title: '创建人',
        dataIndex: 'user_name',
        key: 'user_name'
    },
    {
        title: '开始时间',
        dataIndex: 'start_time',
        key: 'start_time',
        render: start_time => (
            <>
                <p>{new Date(parseInt(start_time)).toLocaleString().replace(/\//g, "-").replace(/上午/g, " ")}</p>
            </>
        ),
    },
    {
        title: '结束时间',
        dataIndex: 'end_time',
        key: 'end_time',
        render: end_time => (
            <>
                <p>{new Date(parseInt(end_time)).toLocaleString().replace(/\//g, "-").replace(/上午/g, " ")}</p>
            </>
        ),
    },
    {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        render: val => (
            <>
                <p>详情</p>
            </>
        ),
    }
]

function ExamList(props) {

    let { subject, examType, examList,changes } = props;
    let { examArr, datas } = props.exam;
    let { data, questionArr } = props.view;

    let [ arr,upArr ] = useState([]);

    useEffect(() => {
        subject()
    }, [])

    useEffect(() => {
        examType()
    }, [])

    useEffect(() => {
        examList()
    }, [])

    let search = () => {
        props.form.validateFields((error, value) => {
            examList({
                subject_id: value.subjectId
            })
        })
    }

    let tabs = e => {
        let arr = Array.from(e.target.parentNode.childNodes);
        arr.map(item => {
            item.className = '';
        })
        e.target.className = styles.active;
    }



    let check = e =>{
        let orrs = Array.from(e.target.parentNode.childNodes);
        orrs.map(item=>{
            item.className = '';
        })
        if(e.target.innerHTML === "未开始"){
            upArr(arr = datas.filter(item=>parseInt(item.start_time) > new Date().getTime())); 
            e.target.className = styles.active;
        }else if(e.target.innerHTML === "已结束"){
            upArr(arr = datas.filter(item=>parseInt(item.end_time) < new Date().getTime())) 
            e.target.className = styles.active;
        }else if(e.target.innerHTML === "进行中"){
            upArr(arr = datas.filter(item=>parseInt(item.end_time) >= new Date().getTime() && parseInt(item.start_time) <= new Date().getTime())) 
            e.target.className = styles.active;
        }else if(e.target.innerHTML === "全部"){
            upArr(arr = datas) 
            e.target.className = styles.active;
        }
        changes({
            arr
        })
    }

    let { getFieldDecorator } = props.form;
    return <div className={styles.wrapper}>
        <p className={styles.title}>试卷列表</p>
        <Form className={styles.wrap}>
            <Form-Item class={styles.wrap_item}>
                考试类型：{
                    getFieldDecorator('questionsTypeId', {
                        rules: [{ required: true, message: '考试类型' }],
                    })(
                        <Select className={styles.select} placeholder="考试类型">
                            {
                                questionArr && questionArr.map(item => {
                                    return <Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Option>
                                })
                            }
                        </Select>,
                    )
                }
                课程：{
                    getFieldDecorator('subjectId', {
                        rules: [{ required: true, message: '请选择身份id' }],
                    })(
                        <Select className={styles.select} placeholder="请选择身份id">
                            {
                                data && data.map(item => {
                                    return <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
                                })
                            }
                        </Select>,
                    )
                }
                <Button className={styles.btn} onClick={search} icon="search">查询</Button>
            </Form-Item>
        </Form>
        <div className={styles.main}>
            <div className={styles.main_top}>
                <h4>试卷列表</h4>
                <div className={styles.top_right} onClick={tabs} onClick={check}>
                    <p className={styles.active}>全部</p>
                    <p>未开始</p>
                    <p>进行中</p>
                    <p>已结束</p>
                </div>
            </div>
            <Table columns={columns} dataSource={examArr} rowKey={"exam_exam_id"} />
        </div>
    </div>
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDisaptchToProps = dispatch => {
    return {
        subject() {
            dispatch({
                type: "view/watch"
            })
        },
        examType() {
            dispatch({
                type: "view/questionType"
            })
        },
        examList(payload) {
            dispatch({
                type: "exam/examList",
                payload
            })
        },
        changes(payload){
            dispatch({
                type:"exam/changes",
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapDisaptchToProps)(Form.create()(ExamList));
