import React ,{ useState, useEffect } from "react";
import { connect } from 'dva';
import styles from './view.scss';
import { Typography ,Button } from 'antd';

const { Title } = Typography;

function View( props ) {
    let { look, examType, questionType, getAll, condition, data, examArr, questionArr, allArr } = props;

    let { saveItems } = props;

    useEffect(()=>{
        look()
    },[])

    useEffect(()=>{
        examType()
    },[])

    useEffect(()=>{
        questionType()
    },[])

    useEffect(()=>{
        getAll()
    },[])

    let [ subject_id, upSubject ] = useState('')
    let [ exam_id, upExam ] = useState('')
    let [ questions_type_id, upQuestions ] = useState('')

    let changes =(e) =>{
        upExam(exam_id = e.target.value);
    }

    let changees = (e) =>{
        upQuestions(questions_type_id = e.target.value);
    }

    let chooseLess = (e) =>{
        upSubject(subject_id = e.target.getAttribute('value')) 
        let arr = Array.from(e.target.parentNode.childNodes);
        arr.map(item=>{
            item.className = '';
        })
        e.target.className = styles.check;
    }

    let allData = e =>{
        let arr = Array.from(e.target.parentNode.childNodes);
        arr.map(item=>{
            if(item.className){
                item.className = '';
            }else{
                item.className = styles.check;
            }
        })
        getAll()
    }

    let search = function(){
        if(subject_id!==''){
            console.log(subject_id)
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

    let saveItem = (id) =>{
        saveItems({
            id
        })
        props.history.push({
            pathname:"/questions/edit"
        })
    }

    let saveDia = (id) =>{
        saveItems({
            id
        })
        props.history.push({
            pathname:"/questions/dialog"
        })
    }

    return <div className={styles.wrapper}>
        <Title level={4}>查看试题</Title>
        <div className={styles.wrapTop}>
            <div className={styles.topType}>
                <p>课程类型:</p>
                <div className={styles.typeAll}>
                    <span onClick={allData}>ALL</span>
                    {
                        data && data.map((item,index)=>{
                            return <span key={item.subject_id} value={item.subject_id} onClick={
                                chooseLess
                            }>{item.subject_text}</span>
                        })
                    }
                </div>
            </div>
            <div className={styles.topType}>
                考试类型：
                <select onChange={changes}>
                    {
                        examArr && examArr.map(item=>{
                            return <option key={item.exam_id} value={item.exam_id}>{item.exam_name}</option>
                        })
                    }
                </select>
                试题类型：
                <select onChange={changees}>
                    {
                        questionArr && questionArr.map(item=>{
                            return <option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</option>
                        })
                    }
                </select>
                <Button icon="search" className={styles.btn} onClick={search}>查询</Button>
            </div>
        </div>
        <div className={styles.wrap}>
            {
                allArr && allArr.map((item,index)=>{
                return <div className={styles.wrap_item} key={index}>
                    <div className={styles.item_left} onClick={()=>{
                        saveDia(item.questions_id)
                    }}>
                        <h4>{item.title}</h4>
                        <div>
                            <span>{item.questions_type_text}</span>
                            <span>{item.subject_text}</span>
                            <span>{item.exam_name}</span>
                        </div>
                        <p>{item.user_name}发布</p>
                    </div>
                    <p onClick={()=>{
                        saveItem(item.questions_id)
                    }}>编辑</p>
                </div>
                })
            }
        </div>
    </div>
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
        },
        saveItems(payload){
            dispatch({
                type:'view/saveItems',
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(View);
