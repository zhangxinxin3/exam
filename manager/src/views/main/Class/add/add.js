import React, { useState, useEffect } from 'react';
import Markdown from "@/components/Markdown";
import { connect } from 'dva';
import { Input, Select, Button, Modal } from 'antd';
import styles from './add.scss';
import Editor from 'for-editor';

const { Option } = Select;
const confirm = Modal.confirm;
function Add(props) {
  let [change1, change2] = useState("");
  let [change_test_type1, change_test_type2] = useState("");
  let [change_class_type1, change_class_type2] = useState("");
  let [change_topic_type1, change_topic_type2] = useState("");
  let [change_mark1, change_mark2] = useState("");
  let [change_ans1, change_ans2] = useState("");
  // let [change1,change2] = useState("");
  console.log(change1, change_test_type1, change_class_type1, change_topic_type1)
  function showConfirm() {
    confirm({
      title: '你确定要日添加这道试题嘛',
      content: '真的要添加嘛',
      onOk() {
        // console.log(change1, change_test_type1, change_class_type1, change_topic_type1);

        props.allTest.push(
          props.add(change1, change_test_type1, change_class_type1, change_topic_type1, change_mark1, change_ans1)
        )
        console.log(props)
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {
      },
    });
  }
  useEffect(() => {
    props.testtype(),
      props.allsubject(),
      props.alltype(),
      props.getalltest()
  }, []);
  console.log(props)
  let change = e => {
    change2(change1 = e.target.value)
  }
  let changeTestType = e => {
    console.log(e)
    change_test_type2(change_test_type1 = e)
  }
  let changeClassType = e => {
    change_class_type2(change_class_type1 = e)
  }
  let changeTopicType = e => {
    change_topic_type2(change_topic_type1 = e)
  }
  let changeMark = e => {
    console.log(e)
    change_mark2(change_mark1 = e)
  }
  let changeAnswer = e => {
    change_ans2(change_ans1 = e)
  }
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>添加试题</h2>
      <div className={styles.main}>
        <div className={styles.markcont}>
          <p>题目信息</p>
          <Input placeholder="请输入题目标题,不超过20个" onChange={change} />
          <p>题目管理</p>
          {/* <Markdown /> */}
          <Editor height="auto" value={change_mark1} onChange={changeMark} />
        </div>
        <div>
          <p>请选择考试类型：</p>
          <Select defaultValue="周考1" style={{ width: 120 }} onChange={changeTestType}>
            {props.dataArr.map((item, index) => {
              return <Option value={item.exam_id} key={index}>{item.exam_name}</Option>
            })}
          </Select>
        </div>
        <div>
          <p>请选择课程类型：</p>
          <Select defaultValue="JavaScript上" style={{ width: 120 }} onChange={changeClassType}>
            {props.subArr.map((item, index) => {
              return <Option value={item.subject_id} key={index}>{item.subject_text}</Option>
            })}
          </Select>
        </div>
        <div>
          <p>请选择题目类型：</p>
          <Select defaultValue="简答题" style={{ width: 120 }} onChange={changeTopicType}>
            {props.typeArr.map((item, index) => {
              return <Option value={item.questions_type_id} key={index}>{item.questions_type_text}</Option>
            })}
          </Select>
        </div>
        <div className={styles.markcont}>
          <h2>答案信息</h2>
          <Editor height="auto" value={change_ans1} onChange={changeAnswer} />
          {/* <Markdown /> */}
        </div>
        <Button onClick={showConfirm} style={{ background: "blue", color: "white" }}>提交</Button>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  // console.log("state",state)
  return {
    ...state.addtest
  }
}
const mapDispatchToProps = dispatch => {
  return {
    add(change1, change_test_type1, change_class_type1, change_topic_type1, change_mark1, change_ans1) {
      dispatch({
        type: "addtest/addtest",
        payload: {
          questions_type_id: change_topic_type1,	//试题类型id
          questions_stem: change_mark1,//题干题干
          subject_id: change_class_type1,//课程id
          exam_id: change_test_type1,//考试类型id
          user_id: 'ypay2t-7uxsd',	//用户id
          questions_answer: change_ans1,//题目答案
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
