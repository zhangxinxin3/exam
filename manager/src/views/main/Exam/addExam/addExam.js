import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './addExam.scss';
import { Input, InputNumber, DatePicker, Select, Button, Modal } from 'antd';
const confirm = Modal.confirm;
const { Option } = Select;
function AddExam(props) {
    let [getName, setName] = useState("");
    let [getSelVal1, setSelVal2] = useState("");
    let [getSelVal3, setSelVal4] = useState("");
    let [getNum, setNum] = useState("");
    let [getStartTime, setStartTime] = useState("");
    let [getEndTime, setEndTime] = useState("");
    let time1 = new Date(getStartTime);
    let startTimes = time1.getTime();
    let time2 = new Date(getEndTime);
    let endTimes = time2.getTime();
    console.log(props)
    // console.log(startTimes)
    useEffect(() => {
            props.getallclass(),
            props.getalltype(),
            props.getcreatetest()
    }, [])
    // console.log(getName, getSelVal1, getSelVal3, getNum, startTimes, endTimes)
    let iptName = e => {
        setName(getName = e.target.value)
    }
    let selVal1 = e => {
        setSelVal2(getSelVal1 = e)
    }
    let selVal2 = e => {
        setSelVal4(getSelVal3 = e)
    }
    let iptNum = e => {
        setNum(getNum = e)
    }
    let startTime = (value, dataString) => {
        setStartTime(getStartTime = dataString)
    }
    let endTime = (value, dataString) => {
        setEndTime(getEndTime = dataString)
    }
    let jumpView = () => {
        // console.log(props)
        if (getName === "" || getSelVal1 === "" || getSelVal3 === "" || getNum === "" || getStartTime === "" || getEndTime === "") {
            // console.log("input框值为空，请补全后再来操作")
            confirm({
                title: '提示',
                content: 'input框值为空，请补全后再来操作',
            })
        } else {
            // props.getcreatetest(getName, getSelVal1, getSelVal3, getNum, startTimes, endTimes)
            props.history.push("/exam/addMark?title="+getName)
            let obj = {
                subject_id: getSelVal3,
                exam_id: getSelVal1,
                title: getName,
                number: getNum,
                start_time: startTimes,
                end_time: endTimes,
            }
            props.getCreateTestArr.push(obj);
            let newObj = JSON.stringify(obj);
            localStorage.setItem("obj",newObj);
            console.log(props)
            // props.history.push('/questions/examList')
        }
    }
    return (
        <div className={styles.wrap}>
            <h1>添加考试</h1>
            <div className={styles.container}>
                <div>
                    <h2>*试卷名称</h2>
                    <div className={styles.item}>
                        <Input style={{ width: 500, height: 50 }} onChange={iptName} />
                    </div>
                    <h2>*选择考试类型</h2>
                    <div className={styles.item}>
                        <Select defaultValue="周考1" style={{ width: 200, fontSize:"18px" }} onChange={selVal1}>
                            {props.getAllTypeArr.map((item, index) => {
                                return <Option key={index} value={item.exam_id} style={{ fontSize:"18px" }}>{item.exam_name}</Option>
                            })}
                        </Select>
                    </div>
                    <h2>*选择课程</h2>
                    <div className={styles.item}>
                        <Select defaultValue="JavaScript上" style={{ width: 200, fontSize:"18px"}} onChange={selVal2}>
                            {props.getAllClassArr.map((item, index) => {
                                return <Option key={index} value={item.subject_id} style={{ fontSize:"18px" }}>{item.subject_text}</Option>
                            })}
                        </Select>
                    </div>
                    <h2>*设置题量</h2>
                    <div className={styles.item}>
                        <InputNumber min={1} max={10} defaultValue={3} onChange={iptNum} />
                    </div>
                    <h2>*考试时间</h2>
                    <div className={styles.item} style={{ marginBottom: 0 }}>
                        <DatePicker showTime
                            format="YYYY-MM-DD HH:mm:ss"
                            placeholder="开始时间"
                            onChange={startTime}
                        />
                        <DatePicker showTime
                            format="YYYY-MM-DD HH:mm:ss"
                            placeholder="结束时间"
                            onChange={endTime} />
                    </div>

                    <div className={styles.item}>
                        <Button type="primary" htmlType="submit" onClick={jumpView}>创建试卷</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

AddExam.defaultProps = {
    user: ''
}

const mapStateToProps = state => {
    return {
        ...state.addExam
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getallclass() {
            dispatch({
                type: "addExam/getallclass"
            })
        },
        getalltype() {
            dispatch({
                type: "addExam/getalltype"
            })
        },
        getcreatetest() {
            dispatch({
                type: "addExam/getcreatetest"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddExam)
