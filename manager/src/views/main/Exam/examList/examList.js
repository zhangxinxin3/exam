import React, { useState, useEffect } from "react";
import { connect } from 'dva';
import { Form, Select, Button, Table, Icon } from 'antd';
import styles from './examList.scss';

const { Option } = Select;
const columns = [
    {
        title: '试卷信息',
        dataIndex: 'information',
        key: 'information'
    },
    {
        title: '班级',
        dataIndex: 'class',
        key: 'class',
        render: room => (
            <>
                <p>考试班级</p>
                {
                    room.map((item, index) => {
                        return <span key={index} style={{ fontSize: "12px", marginRight: "8px" }}>{item}</span>
                    })
                }
            </>
        ),
    },
    {
        title: '创建人',
        dataIndex: 'founder',
        key: 'founder'
    },
    {
        title: '开始时间',
        dataIndex: 'start',
        key: 'start',
        render: start => (
            <>
                <p>{new Date(parseInt(start)).toLocaleString().replace(/\//g, "-").replace(/上午/g, " ")}</p>
            </>
        ),
    },
    {
        title: '结束时间',
        dataIndex: 'end',
        key: 'end',
        render: end => (
            <>
                <p>{new Date(parseInt(end)).toLocaleString().replace(/\//g, "-").replace(/上午/g, " ")}</p>
            </>
        ),
    },
    {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation'
    }
]

function ExamList(props) {
    // let [ datas ]=useState([]);

    let { subject, examType, examList } = props;
    let { examArr, datas } = props.exam;
    let { data, questionArr } = props.view;

    useEffect(() => {
        subject(),
            examType(),
            examList()
    }, [])
    console.log(props)
    // let newMessage = JSON.parse(decodeURI(props.history.location.search.slice(5)));
    let val = localStorage.getItem('obj');
    console.log(val)
    let newVal = JSON.parse(val);
    let newValArr = {
        grade_id:["w7rz7t-1omw3-4rdv6b-okkgx"],
        title:newVal.title,
        grade_name:["1611B"],
        room_id:["-qqts69-2pq07w-hiua58ddlo2b"],
        room_text:["34403"],
        end_time:newVal.end_time,
        exam_id:newVal.exam_id,
        start_time:newVal.start_time,
        number:newVal.number,
        subject_id:newVal.subject_id,
        user_name:'chenmanjie'
    }
    newValArr.grade_id.push(newVal);
    examArr.push(newValArr)
    console.log(newValArr)
    console.log(examArr)
    examArr && examArr.map(item => {
        let room = [];
            item.grade_name.map(val => {
                room.push(val)
            })
        let flag = datas.some(val => val.information === item.title);
        if (!flag) {
            return datas.push({
                key: item.exam_exam_id,
                information: item.title,
                class: room,
                founder: item.user_name,
                start: item.start_time,
                end: item.end_time,
                operation: "详情"
            })
        }
    })

    let search = e => {
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
                <div className={styles.top_right} onClick={tabs}>
                    <p className={styles.active}>全部</p>
                    <p>进行中</p>
                    <p>已结束</p>
                </div>
            </div>
            <Table columns={columns} dataSource={datas} />
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
        }
    }
}
export default connect(mapStateToProps, mapDisaptchToProps)(Form.create()(ExamList));
