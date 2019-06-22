import React,{ useState, useEffect } from 'react';
import { connect  } from 'dva';
import { Table, Form, Input, Select, Button } from 'antd';
import styles from './detail.scss';

// const { Option } = Select;

function Detail(props){

    let id = props.location.search.split('=')[1];

    let { getDetail, detail } = props;

    useEffect(()=>{
        getDetail({
            id
        })
    },[])

    console.log(detail.questions)

    return <div className={styles.wrapper}>
        <p className={styles.title}>阅卷</p>
        <div className={styles.wrap}>
            <div className={styles.wrapLeft}>
                {
                    detail.questions && detail.questions.map((item,index)=>{
                        return <div key={item.student_id}>
                            <p>{index}.{item.title}<span>{item.questions_type_text}</span></p>
                            <div>{item.questions_stem}</div>
                            <div>
                                <div>
                                    <p>学生答案</p>
                                    <div>{item.questions_answer}</div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className={styles.wrapRight}>
                <div className={styles.wrapFiexd}>
                    <p>{detail.student_name}</p>
                    <p>得分:<b>{detail.score}</b></p>
                    <Button>确定</Button>
                </div>   
            </div>
            
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
        getDetail(payload){
            dispatch({
                type:"class/getDetail",
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Detail)
