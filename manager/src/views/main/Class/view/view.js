import React ,{useState,useEffect} from "react";
import { connect } from 'dva';
import styles from './view.scss';
import { Typography ,Button } from 'antd';

const { Title } = Typography;

function View(props) {
    let {look,examType,questionType,getAll,condition,data,examArr,questionArr,allArr} = props;

    useEffect(()=>{
        look()
        examType()
        questionType()
        getAll()
    },[])

    let [subject_id,upSubject] = useState('')
    let [exam_id,upExam] = useState('')
    let [questions_type_id,upQuestions] = useState('')



    let changes =(e) =>{
        exam_id = e.target.value;
    }

    let changees = (e) =>{
        questions_type_id = e.target.value;
    }

    let chooseLess = (id) =>{
        subject_id = id
    }

    let search = function(){
        if(subject_id!==''){
            if(exam_id !== ''){
                condition({
                    subject_id,
                    exam_id
                })
            }else if(questions_type_id !== ''){
                condition({
                    subject_id,
                    questions_type_id
                })
            }else{
                condition({
                    subject_id
                })
            }
        }else if(exam_id !== ''){
            if(questions_type_id !== ''){
                condition({
                    exam_id,
                    questions_type_id
                })
            }else{
                condition({
                    exam_id
                })    
            }
        }else if(questions_type_id !== ''){
            condition({
                questions_type_id
            })
        }
        if(subject_id!=='' && exam_id !== '' && questions_type_id !== ''){
            condition({
                subject_id,
                exam_id,
                questions_type_id
            })
        }
    }

    return <div className={styles.wrapper}>
        <Title level={4}>查看试题</Title>
        <div className={styles.wrapTop}>
            <div className={styles.topType}>
                <p>课程类型:</p>
                <div className={styles.typeAll}>
                    {
                        data.map((item,index)=>{
                            return <span key={item.subject_id} onClick={()=>{
                                chooseLess(item.subject_id)
                            }} className={styles.nod}>{item.subject_text}</span>
                        })
                    }
                </div>
            </div>
            <div className={styles.topType}>
                考试类型：
                <select onChange={changes}>
                    {
                        examArr.map(item=>{
                            return <option key={item.exam_id} value={item.exam_id}>{item.exam_name}</option>
                        })
                    }
                </select>
                试题类型：
                <select onChange={changees}>
                    {
                        questionArr.map(item=>{
                            return <option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</option>
                        })
                    }
                </select>
                <Button icon="search" className={styles.btn} onClick={search}>查询</Button>
            </div>
        </div>
        <div className={styles.wrap}>
            {
                allArr.map((item,index)=>{
                    return <div className={styles.wrap_item} key={index}>
                        <div className={styles.item_left}>
                            <h4>{item.title}</h4>
                            <div>
                                <span>{item.questions_type_text}</span>
                                <span>{item.subject_text}</span>
                                <span>{item.exam_name}</span>
                            </div>
                            <p>{item.user_name}发布</p>
                        </div>
                        <p>编辑</p>
                    </div>
                })
            }
        </div>
    </div>
}

View.defaultProps = {
}

const mapStateToProps = state=>{
    return {
      ...state.view
    }
  }
  
  const mapDisaptchToProps = dispatch=>{
    return {
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
      getAll(){
          dispatch({
              type:'view/getAll'
          })
      },
      condition(params){
          dispatch({
              type:'view/condition',
              payload:params
          })
      }
    }
  }

export default connect(mapStateToProps, mapDisaptchToProps)(View);