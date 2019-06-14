import React ,{useState,useEffect} from "react";
import { connect } from 'dva';
import Editor from 'for-editor';
import styles from './edit.scss';
import { Select, Button, Modal } from 'antd';

const { Option } = Select;
const confirm = Modal.confirm;
function Edit(props) {
    let { condition, allArr,look, examType, questionType, questionUp, data, examArr, questionArr } = props;
    let id = props.location.search.split('=')[1];
    let [title,upTitle] = useState(allArr[0] && allArr[0].title)
    let [exam,upExam] = useState(allArr[0] && allArr[0].exam_id);
    let [subject,upSubject] = useState(allArr[0] && allArr[0].subject_id);
    let [questions,upQuestions] = useState(allArr[0] && allArr[0].questions_type_id);
    let [stem,upStem] = useState(allArr[0] && allArr[0].questions_stem)
    let [answer,upAnswer] = useState(allArr[0] && allArr[0].questions_answer)

    useEffect(()=>{
        condition({
            questions_id:id
        });
        look(), 
        examType(), 
        questionType()
    },[])

    let handleChange = e =>{//题目
        console.log(e)
        upStem(stem = e)
    }

    let handleChanges = e =>{//答案
        upAnswer(answer = e)
    }

    let changeTitle = e =>{
        console.log(e.target.value);
        upTitle(title = e.target.value)
    }

    //改变考试类型
    let changeExam = e =>{
        upExam(exam=e);
    }

    //改变课程类型
    let changeSubject = e =>{
        upSubject(subject=e);
    }

    //改变题目类型
    let changeQuestions = e =>{
        upQuestions(questions=e)
    }
    
    let showConfirm = e =>{
        confirm({
            title: '您要修改吗？',
            content: '确定要修改这道题吗？',
            onOk() {
                questionUp({
                    questions_id:id,
                    title:title,
                    questions_stem:stem,
                    questions_answer:answer,
                    subject_id:subject,
                    questions_type_id:questions,
                    exam_id:exam
                })
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            },
            onCancel() {},
          });
    }

    return <div className={styles.wrapper}>
        <h1 className={styles.title}>编辑试题</h1>
        {
            allArr && allArr.map((item,index)=>{
                return <div key={index} className={styles.wrap}>
                    <h3>题目信息</h3>
                    <h4>题干</h4>
                    <input className={styles.tip} type="text" value={item.title} onChange={changeTitle}/>
                    <h3>题目主题</h3>
                    <Editor className="for-editor-content" height="auto" value={item.questions_stem} onChange={handleChange}/>
                    <p>请选择考试类型：</p>
                    <Select defaultValue={item.exam_name} onChange={changeExam}>
                        {
                            examArr && examArr.map(item=>{
                                return <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                            })
                        }
                    </Select>
                    <p>请选择课程类型：</p>
                    <Select defaultValue={item.exam_name} onChange={changeSubject}>
                        {
                            data && data.map(item=>{
                                return <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
                            })
                        }
                    </Select>
                    <p>请选择题目类型：</p>
                    <Select defaultValue={item.questions_type_text} onChange={changeQuestions}>
                        {
                            questionArr && questionArr.map(item=>{
                                return <Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Option>
                            })
                        }
                    </Select>
                    <h3>答案信息</h3>
                    <Editor height="auto" value={item.questions_answer} onChange={handleChanges}/>
                    <Button className={styles.btn} onClick={showConfirm}>提交</Button>
                </div>
            })
        }
        
    </div>
}

const mapStateToProps = state=>{
    return {
      ...state.view
    }
  }
  
const mapDisaptchToProps = dispatch=>{
    return {
        condition(params){
            dispatch({
                type:'view/condition',
                payload:params
            })
        },
        look(){
            dispatch({
            type: 'view/watch'
            })
        },
        examType(){
            dispatch({
                type:'view/examType'
            })
        },
        questionType(){
            dispatch({
                type:'view/questionType'
            })
        },
        questionUp(payload){
            console.log(payload)
            dispatch({
                type:'view/questionUp',
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Edit);