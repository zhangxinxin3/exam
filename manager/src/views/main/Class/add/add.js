import React, { useState, useEffect } from 'react';
import Markdown from "@/components/Markdown";
import { connect } from 'dva';
import { Input, Select, Button, Modal } from 'antd';
import styles from './add.scss';

const { Option } = Select;
const confirm = Modal.confirm;
function Add(props) {
    let [change1, change2] = useState("");
    let [change_test_type1, change_test_type2] = useState("");
    let [change_class_type1, change_class_type2] = useState("");
    let [change_topic_type1, change_topic_type2] = useState("");
    console.log(props.userData && props.userData.user_id)
    let [user, upUser] = useState(props.userData && props.userData.user_id);
    console.log(user)
    
    useEffect(() => {
        props.getUser()
        props.testtype(),
        props.allsubject(),
        props.alltype(),
        props.getalltest()
    }, []);

    function showConfirm() {
        confirm({
            title: '你确定要日添加这道试题嘛',
            content: '真的要添加嘛',
            onOk() {
                props.allTest.push(
                    props.add(user,change1, change_test_type1, change_class_type1, change_topic_type1)
                )
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            },
            onCancel() {
            },
        });
    }
    
    let change = e => {
        change2(change1 = e.target.value)
    }
    let changeTestType = e => {
        change_test_type2(change_test_type1 = e)
    }
    let changeClassType = e => {
        change_class_type2(change_class_type1 = e)
    }
    let changeTopicType = e => {
        change_topic_type2(change_topic_type1 = e)
    }
    return (
        <div className={styles.content}>
            <h2 className={styles.title}>添加试题</h2>
            <div className={styles.main}>
                <div className={styles.markcont}>
                    <p>题目信息</p>
                    <Input placeholder="请输入题目标题,不超过20个" onChange={change} />
                    <p>题目管理</p>
                    <Markdown />
                </div>
                <div>
                    <p>请选择考试类型：</p>
                    <Select defaultValue="周考1" style={{ width: 120 }} onChange={changeTestType}>
                        {
                            props.dataArr && props.dataArr.map((item, index) => {
                                return <Option value={item.exam_id} key={index}>{item.exam_name}</Option>
                            })
                        }
                    </Select>
                </div>
                <div>
                    <p>请选择课程类型：</p>
                    <Select defaultValue="JavaScript上" style={{ width: 120 }} onChange={changeClassType}>
                        {
                            props.subArr && props.subArr.map((item, index) => {
                                return <Option value={item.subject_id} key={index}>{item.subject_text}</Option>
                            })
                        }
                    </Select>
                </div>
                <div>
                    <p>请选择题目类型：</p>
                    <Select defaultValue="简答题" style={{ width: 120 }} onChange={changeTopicType}>
                        {
                            props.typeArr && props.typeArr.map((item, index) => {
                                return <Option value={item.questions_type_id} key={index}>{item.questions_type_text}</Option>
                            })
                        }
                    </Select>
                </div>
                <div className={styles.markcont}>
                    <h2>答案信息</h2>
                    <Markdown />
                </div>
                <Button onClick={showConfirm} style={{ background: "blue", color: "white" }}>提交</Button>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        ...state.addtest
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getUser(){
            dispatch({
                type:"addtest/getUser"
            })
        },
        add(user, change1, change_test_type1, change_class_type1, change_topic_type1) {
            dispatch({
                type: "addtest/addtest",
                payload: {
                    questions_type_id: change_topic_type1,	//试题类型id
                    questions_stem: '随便写个',//题干题干
                    subject_id: change_class_type1,//课程id
                    exam_id: change_test_type1,//考试类型id
                    user_id: "w6l6n-cbvl6s",	//用户id
                    questions_answer: '随便写个答案',//题目答案
                    title: change1//试题的标题 
                }
            })
        },
        testtype() {
            dispatch({
                type: "addtest/testtype"
            })
        },
        allsubject() {
            dispatch({
                type: "addtest/allsubject"
            })
        },
        alltype() {
            dispatch({
                type: "addtest/alltype"
            })
        },
        getalltest() {
            dispatch({
                type: "addtest/getalltest"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Add)
