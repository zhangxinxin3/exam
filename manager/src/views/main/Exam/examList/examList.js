import React, { useState, useEffect } from "react";
import { connect } from 'dva';
import { Form, Select, Button } from 'antd';
import styles from './examList.scss';

const { Option } = Select;

function ExamList(props) {
    console.log(props)

    let { subject, examType, examList } = props;
    let { data, questionArr, examArr } = props;

    useEffect(()=>{
        subject(), 
        examType(),
        examList() 
    },[])


    let { getFieldDecorator } = props.form;
    return <div className={styles.wrapper}>
        <p className={styles.title}>试卷列表</p>
        <Form className={styles.wrap}>
            <Form-Item class={styles.wrap_item}>
                考试类型：{
                    getFieldDecorator('identity', {
                        rules: [{ required: true, message: '请选择身份id' }],
                    })(
                    <Select className={styles.select} setfieldsvalue="请选择身份id">
                        <Option key="111" value="111">111</Option>
                        {/* {
                            identArr && identArr.map(item=>{
                                return <Option key={ item.identity_id } value={ item.identity_id }>{ item.identity_text }</Option>
                            })
                        } */}
                    </Select>,
                    )
                }
                课程：{
                    getFieldDecorator('identity', {
                        rules: [{ required: true, message: '请选择身份id' }],
                    })(
                    <Select className={styles.select} setfieldsvalue="请选择身份id">
                        <Option key="111" value="111">111</Option>
                        {/* {
                            identArr && identArr.map(item=>{
                                return <Option key={ item.identity_id } value={ item.identity_id }>{ item.identity_text }</Option>
                            })
                        } */}
                    </Select>,
                    )
                }
                <Button className={styles.btn}>查询</Button>
            </Form-Item>
        </Form>
    </div>
}

const mapStateToProps = state=>{
    return {
        ...state
    }
  }
  
const mapDisaptchToProps = dispatch=>{
    return {
        subject(){
            dispatch({
                type:"view/watch"
            })
        },
        examType(){
            dispatch({
                type:"view/questionType"
            })
        },
        examList(){
            dispatch({
                type:"exam/examList"
            })
        }
    }
}
export default connect(mapStateToProps, mapDisaptchToProps)(Form.create()(ExamList));
