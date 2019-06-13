import React, { useEffect } from 'react';
import Markdown from "@/components/Markdown";
import { connect } from 'dva';
import { Input, Select, Button } from 'antd';
import styles from './add.scss';

const { Option } = Select;
function Add(props) {
  useEffect(() => {
    props.add(),
    props.testtype(),
    props.allsubject(),
    props.alltype()
  }, []);
  console.log(props)
  let change1 = e => {
    console.log(e.target.value)
  }
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>添加试题</h2>
      <div className={styles.main}>
        <div className={styles.markcont}>
          <p>题目信息</p>
          <Input placeholder="请输入题目标题,不超过20个" onChange={change1} />
          <p>题目管理</p>
          <Markdown />
        </div>
        <div>
          <p>请选择考试类型：</p>
          <Select defaultValue="周考1" style={{ width: 120 }}>
            {
              props.dataArr.map((item,index)=>{
                return <Option value={item.exam_id} key={index}>{item.exam_name}</Option>
              })
            }
          </Select>
        </div>
        <div>
          <p>请选择课程类型：</p>
          <Select defaultValue="JavaScript上" style={{ width: 120 }}>
            {props.subArr.map((item,index)=>{
              return <Option value={item.subject_id} key={index}>{item.subject_text}</Option>
            })}
          </Select>
        </div>
        <div>
        </div>
        <div className={styles.markcont}>
          <h2>答案信息</h2>
          <Markdown />
        </div>
        <Button type="primary" htmlType="submit" >提交</Button>
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

  questions_type_id: '',	//试题类型id
  questions_stem: '',//	题干
  subject_id: '',//课程id
  exam_id: '',//考试类型id
  user_id: '',	//用户id
  questions_answer: '',//题目答案
  title: ''//试题的标题 
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
    testtype(){
      dispatch({
        type:"addtest/testtype"
      })
    },
    allsubject(){
      dispatch({
        type:"addtest/allsubject"
      })
    },
    alltype(){
      dispatch({
        type:"addtest/alltype"
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Add)
