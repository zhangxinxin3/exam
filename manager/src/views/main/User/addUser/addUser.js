import React, { useState, useEffect } from "react";
import { connect } from 'dva';
import { Form, Input, Select, Button } from 'antd';
import styles from './addUser.scss';

const { Option } = Select;

function AddUser(props) {
    let { ident, viewAuthority, apiAuthority } = props;
    let { identArr, viewArr, apiArr } = props;

    let [ adup, upAdup ] = useState(true);

    useEffect(()=>{
        ident(), 
        viewAuthority(), 
        apiAuthority()
    },[])

    let changeAdup = e =>{
        if( e.target.innerHTML === '更新用户' ){
            upAdup( adup = false )
        }else{
            upAdup( adup = true )
        }
    }

    return <div className={styles.wrapper}>
        <p className={styles.title}>添加用户</p>
        <Form className={styles.wrap}>
            <Form-Item class={styles.wrap_item}>
                <div className={styles.tits} onClick={changeAdup}>
                    <p className={styles.active}>添加用户</p>
                    <p>更新用户</p>
                </div>
                {
                    adup ? <div className={styles.item_box}>
                        <Input placeholder="请输入用户名" />
                        <Input placeholder="请输入密码" />
                        <Select className={styles.select} defaultValue="请选择身份id">
                            {
                                identArr && identArr.map(item=>{
                                    return <Option key={ item.identity_id } value={ item.identity_id }>{ item.identity_text }</Option>
                                })
                            }
                        </Select>
                        <div className={styles.btns}>
                            <Button className={styles.sure}>确定</Button>
                            <Button className={styles.reset}>重置</Button>
                        </div>
                    </div> : <div className={styles.item_box}>
                        <Select className={styles.select} defaultValue="请选择用户id">
                            {
                                identArr && identArr.map(item=>{
                                    return <Option key={ item.identity_id } value={ item.identity_id }>{ item.identity_text }</Option>
                                })
                            }
                        </Select>
                        <Input placeholder="请输入用户名" />
                        <Input placeholder="请输入密码" />
                        <Select className={styles.select} defaultValue="请选择身份id">
                            {
                                identArr && identArr.map(item=>{
                                    return <Option key={ item.identity_id } value={ item.identity_id }>{ item.identity_text }</Option>
                                })
                            }
                        </Select>
                        <div className={styles.btns}>
                            <Button className={styles.sure}>确定</Button>
                            <Button className={styles.reset}>重置</Button>
                        </div>
                    </div>
                } 
            </Form-Item>
            <Form-Item class={styles.wrap_item}>
                <div className={styles.tits}>
                    <p className={styles.active}>添加身份</p>
                </div>
                <div className={styles.item_box}>
                    <Input type="text" placeholder="请输入身份名称" />
                    <div className={styles.btns}>
                        <Button className={styles.sure}>确定</Button>
                        <Button className={styles.reset}>重置</Button>
                    </div>
                </div>
            </Form-Item>
            <Form-Item class={styles.wrap_item}>
                <div className={styles.tits}>
                    <p className={styles.active}>添加api接口权限</p>
                </div>
                <div className={styles.item_box}>
                    <Input type="text" placeholder="请输入api接口权限名称" />
                    <Input type="text" placeholder="请输入api接口权限url" />
                    <Input type="text" placeholder="请输入api接口权限方法" />
                    <div className={styles.btns}>
                        <Button className={styles.sure}>确定</Button>
                        <Button className={styles.reset}>重置</Button>
                    </div>
                </div>
            </Form-Item>
            <Form-Item class={styles.wrap_item}>
                <div className={styles.tits}>
                    <p className={styles.active}>添加视图接口权限</p>
                </div>
                <div className={styles.item_box}>
                    <Select className={styles.select} defaultValue="请选择已有视图">
                        {
                            viewArr && viewArr.map(item=>{
                                return <Option key={ item.view_authority_id } value={ item.view_authority_id }>{ item.view_authority_text }</Option>
                            })
                        }
                    </Select>
                    <div className={styles.btns}>
                        <Button className={styles.sure}>确定</Button>
                        <Button className={styles.reset}>重置</Button>
                    </div>
                </div>
            </Form-Item>
            <Form-Item class={styles.wrap_item}>
                <div className={styles.tits}>
                    <p className={styles.active}>给身份设置api接口权限</p>
                </div>
                <div className={styles.item_box}>
                    <Select className={styles.select} defaultValue="请选择身份id">
                        {
                            identArr && identArr.map(item=>{
                                return <Option key={ item.identity_id } value={ item.identity_id }>{ item.identity_text }</Option>
                            })
                        }
                    </Select>
                    <Select className={styles.select} defaultValue="请选择api接口权限数据">
                        {
                            apiArr && apiArr.map(item=>{
                                return <Option key={ item.api_authority_id } value={ item.api_authority_id }>{ item.api_authority_text }</Option>
                            })
                        }
                    </Select>
                    <div className={styles.btns}>
                        <Button className={styles.sure}>确定</Button>
                        <Button className={styles.reset}>重置</Button>
                    </div>
                </div>
            </Form-Item>
            <Form-Item class={styles.wrap_item}>
                <div className={styles.tits}>
                    <p className={styles.active}>给身份设置视图权限</p>
                </div>
                <div className={styles.item_box}>
                    <Select className={styles.select} defaultValue="请选择身份id">
                        {
                            identArr && identArr.map(item=>{
                                return <Option key={ item.identity_id } value={ item.identity_id }>{ item.identity_text }</Option>
                            })
                        }
                    </Select>
                    <Select className={styles.select} defaultValue="请选择视图id">
                        {
                            viewArr && viewArr.map(item=>{
                                return <Option key={ item.view_authority_id } value={ item.view_authority_id }>{ item.view_authority_text }</Option>
                            })
                        }
                    </Select>
                    <div className={styles.btns}>
                        <Button className={styles.sure}>确定</Button>
                        <Button className={styles.reset}>重置</Button>
                    </div>
                </div>
            </Form-Item>
        </Form>
    </div>
}

const mapStateToProps = state=>{
    return {
        ...state.addUser
    }
  }
  
  const mapDisaptchToProps = dispatch=>{
    return {
        ident(){
            dispatch({
                type:"addUser/ident"
            })
        }, 
        viewAuthority(){
            dispatch({
                type:"addUser/viewAuthority"
            })
        }, 
        apiAuthority(){
            dispatch({
                type:"addUser/apiAuthority"
            })
        }
    }
  }

export default connect(mapStateToProps, mapDisaptchToProps)(Form.create()(AddUser));
