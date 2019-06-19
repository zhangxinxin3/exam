import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './addMark.scss';
import { Select, Button, Drawer } from 'antd';

const { Option } = Select;
function AddMark(props) {
    useEffect(() => {
        props.gettest()
    })
    let visible = false;
    let title = props.location.search.split("=")[1];
    let [getShow,setShow] = useState("");
    let showDrawer = e =>{
        console.log(e)
        setShow(getShow = true)
    }
    let onClose = e =>{
        console.log(1)
        setShow(getShow = false)
    }
    return (
        <div className={styles.wrap}>
            <h1>创建试卷</h1>
            <div className={styles.content}>
                <Button type="primary" onClick={showDrawer}>
                    Open
                </Button>
                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    closable={false}
                    onClick={onClose}
                    visible={getShow}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
                <div className={styles.message}>
                    <div className={styles.tit}>{title}</div>
                    <div>考试时间：1小时30分钟 监考人：刘于 开始考试时间：<span>2018.9.10 10：00</span> 阅卷人：刘于</div>
                </div>
                <div className={styles.container}>

                    <Button>创建试卷</Button>
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddMark)
