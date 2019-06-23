import React,{ useState, useEffect } from 'react';
import { connect  } from 'dva';
import { Button, Slider, Modal } from 'antd';
import ReactMarkdown from 'react-markdown';
import styles from './detail.scss';

const confirm = Modal.confirm;

function Detail(props){

    let id = props.location.search.split('=')[1];

    let { getDetail, detail, changeScore } = props;

    useEffect(()=>{
        getDetail({
            id
        })
    },[])


    let onChange = e =>{
        changeScore({
            e
        })
    }

    let sure = e =>{
        confirm({
            title: '确定提交阅卷结果',
            content:"分数值是"+detail.score,
            cancelText:"取消",
            okText:"确定",
            onOk() {
                confirm({
                    title: '批卷结果',
                    content:"批改试卷成功 "+detail.student_name+"得分"+detail.score,
                    okText:"知道了",
                    onOk() {
                        
                        return new Promise((resolve, reject) => {
                        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                        }).catch(() => console.log('Oops errors!'));
                    }
                });
                return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            },
            onCancel() {},
        });
    }   


    return <div className={styles.wrapper}>
        <p className={styles.title}>阅卷</p>
        <div className={styles.wrap}>
            <div className={styles.wrapLeft}>
                {
                    detail.questions && detail.questions.map((item,index)=>{
                        return <div key={item.student_id}>
                            <p>{index+1}.{item.title}<span className={styles.icon}>{item.questions_type_text}</span></p>
                            <ReactMarkdown
                                className={styles.markdown}
                                source={item.questions_stem}
                            />
                            <div className={styles.answer}>
                                <div>
                                    <p>学生答案</p>
                                </div>
                                <div>
                                    <p>标准答案</p>
                                    <div className={styles.goodAnswer}>{item.questions_answer}</div>
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
                    <Slider
                        min={1}
                        max={100}
                        onChange={onChange}
                        value={detail.score}
                    />
                    <Button className={styles.btns} onClick={sure}>确定</Button>

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
        },
        changeScore(payload){
            dispatch({
                type:"class/changeScore",
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Detail)
