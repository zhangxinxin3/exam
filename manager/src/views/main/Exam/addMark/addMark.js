import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './addMark.scss';
import { Select, Button, Drawer, Table } from 'antd';

const { Option } = Select;
let newArr = [];
function AddMark(props) {
    useEffect(() => {
        props.gettest(),
        props.createtest()
    }, [])
    console.log(props)
    let visible = false;
    let title = props.location.search.split("=")[1];
    let [getShow, setShow] = useState(false);
    let showDrawer = e => {
        console.log(e)
        setShow(getShow = true)
    }
    let onClose = e => {
        console.log(1)
        setShow(getShow = true)
    }
    let addToContent = (index) => {
        console.log(index)
        // newArr.push(props.getArr[1]);
    }
    let jumpToExamlist = e =>{
        let val = localStorage.getItem('obj');
        props.history.push('/exam/examList?val='+val);
    }
    console.log(newArr)
    console.log(props.getArr)
    return (
        <div className={styles.wrap}>
            <h1>创建试卷</h1>
            <div className={styles.content}>
                <Button type="primary" onClick={showDrawer}>
                    Open
                </Button>
                <Drawer
                    title="添加试题"
                    style={{ width: "500px" }}
                    placement="right"
                    closable={true}
                    onClick={onClose}
                    visible={getShow}
                    onClose={() => {
                        setShow(getShow = false)
                    }}
                >
                    {
                        props.getArr && props.getArr.map((item, index) => {
                            return <div className={styles.wrap_item} key={index}>
                                <div className={styles.item_left}>
                                    <h4>{item.title}</h4>
                                    <div>
                                        <span>{item.questions_type_text}</span>
                                        <span>{item.subject_text}</span>
                                        <span>{item.exam_name}</span>
                                    </div>
                                    <p>{item.user_name}发布</p><span className={styles.add} onClick={() => { newArr.push(props.getArr[index]); setShow(getShow = true); console.log(newArr) }}>添加</span>
                                </div>
                            </div>
                        })
                    }
                </Drawer>
                <div className={styles.message}>
                    <div className={styles.tit}>{decodeURI(title)}</div>
                    <div>考试时间：1小时30分钟 监考人：刘于 开始考试时间：<span>2018.9.10 10：00</span> 阅卷人：刘于</div>
                </div>
                <div className={styles.container}>
                    {
                        newArr.map((item, index) => {
                            return <div className={styles.box} key={index}>
                                <div className={styles.tit}>{item.title}</div><span className={styles.del} onClick={() => { newArr.splice(index, 1) }}>删除</span>
                                <div>{item.questions_stem}</div>
                            </div>
                        })
                    }
                    <Button onClick={jumpToExamlist}>创建试卷</Button>
                </div>
            </div>
        </div>
    )
}

AddMark.defaultProps = {
    user: ''
}

const mapStateToProps = state => {
    return {
        ...state.addMark
    }
}
const mapDispatchToProps = dispatch => {
    return {
        gettest() {
            dispatch({
                type: "addMark/gettest"
            })
        },
        createtest(){
            dispatch({
                type:"/exam/exam"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddMark)
