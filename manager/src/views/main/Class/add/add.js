import React, { useState, useEffect } from 'react';
import Markdown from "@/components/Markdown";
import { connect } from 'dva';
import { Input, Select, Button, Modal } from 'antd';
import styles from './add.scss';

const { Option } = Select;
const confirm = Modal.confirm;
function showConfirm() {
  confirm({
    title: '你确定要日添加这道试题嘛',
    content: '真的要添加嘛',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() { },
  });
}
function Add(props) {
  let [change1, change2] = useState("");
  let [change_test_type1, change_test_type2] = useState("");
  let [change_class_type1, change_class_type2] = useState("");
  let [change_topic_type1, change_topic_type2] = useState("");
  // let [change1,change2] = useState("");
  console.log(change1, change_test_type1, change_class_type1, change_topic_type1)
  useEffect(() => {
    props.add(),
      props.testtype(),
      props.allsubject(),
      props.alltype()
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
            {props.dataArr.map((item, index) => {
              return <Option value={item.exam_name} key={index}>{item.exam_name}</Option>
            })}
          </Select>
        </div>
        <div>
          <p>请选择课程类型：</p>
          <Select defaultValue="JavaScript上" style={{ width: 120 }} onChange={changeClassType}>
            {props.subArr.map((item, index) => {
              return <Option value={item.subject_text} key={index}>{item.subject_text}</Option>
            })}
          </Select>
        </div>
        <div>
          <p>请选择题目类型：</p>
          <Select defaultValue="简答题" style={{ width: 120 }} onChange={changeTopicType}>
            {props.typeArr.map((item, index) => {
              return <Option value={item.questions_type_text} key={index}>{item.questions_type_text}</Option>
            })}
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
Add
//props的类型检查
localStorage.propTypes = {

}
//props的默认值
Add.defaultProps = {

}
const mapStateToProps = state => {
  // console.log("state",state)
  return {
    ...state.addtest
  }
}
const mapDispatchToProps = dispatch => {
  return {
    add() {
      dispatch({
        type: "addtest/addtest",
        payload: {
          questions_type_id: '774318-730z8m',	//试题类型id
          questions_stem: '随便写个',//题干题干
          subject_id: 'fqtktr-1lq5u',//课程id
          exam_id: '8sc5d7-7p5f9e-cb2zii-ahe5i',//考试类型id
          user_id: 'ypay2t-7uxsd',	//用户id
          questions_answer: '随便写个答案',//题目答案
          title: '随便写个标题'//试题的标题 
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
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Add)
