import React, { useState, useEffect } from "react";
import { connect } from 'dva';
import { Form, Select, Button, Table } from 'antd';
import styles from './examList.scss';

const { Option } = Select;
const columns = [
    {
        title: '试卷信息',
        dataIndex: 'information',
        key: 'information',
    },
    {
        title: '班级',
        dataIndex: 'class',
        key: 'class',
    },
    {
        title: '创建人',
        dataIndex: 'founder',
        key: 'founder',
    },
    {
        title: '开始时间',
        dataIndex: 'start',
        key: 'start',
    },
    {
        title: '结束时间',
        dataIndex: 'end',
        key: 'end',
    },
    {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
    }
]

function ExamList(props) {
    let [ flag,upFlag ]=useState(0);
    let [ datas,upDatas ]=useState([]);

    let { subject, examType, examList } = props;
    let { data, questionArr, examArr } = props;

    useEffect(()=>{
        subject(), 
        examType(),
        examList() 
    },[])

    // upDatas(datas = {
    //     information:"",
    //     class:"",
    //     founder:"",
    //     start:"",
    //     end:"",
    //     operation:""
    // })

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
        <div className={styles.main}>
            <div className={styles.main_top}>
                <h4>试卷列表</h4>
                <div className={styles.top_right}> 
                    <p>全部</p>
                    <p>进行中</p>
                    <p>已结束</p>
                </div>
            </div>
            <Table columns={columns} dataSource={data} />
        </div>
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
