import React, { useState, useEffect } from "react";
import { connect } from 'dva';
import { Modal, Form, Input, Button, Table } from 'antd';
import styles from './type.scss';

function Type(props) {
    let { getType, types, addQuestionType }  = props;
    let [ showDialog, upDialog ] = useState(false);
    let [ typeValue, uptypeValue ] = useState('');
    let [ id, upId ] = useState(props.questionArr.length);


    useEffect(()=>{
        getType()
    },[])

    const columns = [
        {
          title: '类型ID',
          dataIndex: '类型ID',
        },
        {
          title: '类型名称',
          dataIndex: '类型名称',
        },
        {
          title: '操作',
          dataIndex: '操作',
        },
    ];
    
    let handleSubmit = e => {
            e.preventDefault();
            props.form.validateFields((err, values) => {
                if (!err) {
                    uptypeValue(typeValue=values.value)
                    upId(id=id+1)
                }
            });
    };

    let handleOk = e =>{
        upDialog(!showDialog)
        addQuestionType({
            text:typeValue,
            sort:id,
        })
        getType()
    }

    const { getFieldDecorator} = props.form;
    return <div className={styles.wrapper}>
        <h3 level={3} className={styles.tit}>试题分类</h3>
        <div className={styles.wrap}>
            <Button className={styles.btn} onClick={()=>upDialog(!showDialog)}>+ 添加类型</Button>
            <Modal
                title="Modal"
                visible={showDialog}
                okText="确认"
                cancelText="取消"
                onCancel={()=>upDialog(!showDialog)}
                onOk={handleOk}
            >
                <Form onChange={handleSubmit} >
                    <Form.Item>
                    {getFieldDecorator('value', {
                        rules: [{ required: true, message: '请输入类型名称 ' }],
                    })(
                        <Input type="text" setfieldsvalue={typeValue} placeholder="请输入类型名称" />,
                    )}
                    </Form.Item>
                </Form>
            </Modal>
            <Table columns={columns} dataSource={types} size="middle" />
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
        getType(){
            dispatch({
                type:"view/questionType"
            })
        },
        addQuestionType(payload){
            dispatch({
                type:"view/addQuestionType",
                payload
            })
        }
    }
  }

export default connect(mapStateToProps, mapDisaptchToProps)(Form.create()(Type));
