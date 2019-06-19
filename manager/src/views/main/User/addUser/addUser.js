import React, { useState, useEffect } from "react";
import { connect } from 'dva';
import { Form, Input, Select, Button } from 'antd';
import styles from './addUser.scss';

const { Option } = Select;

function AddUser(props) {
    let { ident, viewAuthority, apiAuthority, getUser, addUser, addIdent, addAuthorityApi, addAuthorityView, setIdentityApi, setIdentityView, upIdent } = props;
    let { identArr, viewArr, apiArr, userArr } = props;

    let [ adup, upAdup ] = useState(true);
    let [ viewtext, upViewtext ] = useState('');

    useEffect(()=>{
        ident(), 
        viewAuthority(), 
        apiAuthority(),
        getUser()
    },[])

    let changeAdup = e =>{
        if( e.target.innerHTML === '更新用户' ){
            upAdup( adup = false )
        }else{
            upAdup( adup = true )
        }
    }

    //添加用户
    let hankAddUser=()=>{
        props.form.validateFields((err,value)=>{
            console.log(value)
            addUser({
                user_name:value.username,
                user_pwd:value.password,
                identity_id:value.identity
            })
        })
    }

    //更新用户
    let hankUpuser =()=>{
        props.form.validateFields((err,value)=>{
            console.log(value)
            upIdent({
                user_id:value.userId,
                user_name:value.upUsername,
                user_pwd:value.uPpassword,
                identity_id:value.upIdentity
            })
        })
    }

    let hankIdent = () =>{
        props.form.validateFields((err,value)=>{
            console.log(value)
            addIdent({
                identity_text:value.identName
            })
        })
    }

    let hankAddApi = () =>{
        props.form.validateFields((err,value)=>{
            console.log(value)
            addAuthorityApi({
                api_authority_text:value.apiText,
                api_authority_url:value.apiUrl,
                api_authority_method:value.apiMehtod
            })
        })
    }

    let hankAddView = () =>{
        props.form.validateFields((err,value)=>{
            viewArr && viewArr.map(item=>{
                if(item.view_id===value.viewAuthority){
                    upViewtext(viewtext = item.view_authority_text)
                }
            })
            addAuthorityView({
                view_authority_text:viewtext,
                view_id:value.viewAuthority
            })
        })
    }

    let HankIdentityApi = () =>{
        props.form.validateFields((err,value)=>{
            console.log(value)
            setIdentityApi({
                identity_id:value.identity,
                api_authority_id:value.apiId
            })
        })
    }

    let HankIdentityView = () =>{
        props.form.validateFields((err,value)=>{
            console.log(value)
            setIdentityView({
                identity_id:value.identity,
                view_authority_id:value.IdentityView
            })
        })
    }

    let reset = () =>{
        props.form.setFieldsValue((err,value)=>{
            console.log(value)
        })
    }

    let { getFieldDecorator } = props.form;
    return <div className={styles.wrapper}>
        <p className={styles.title}>添加用户</p>
        <Form className={styles.wrap}>
            <Form-Item class={styles.wrap_item}>
                <div className={styles.tits} onClick={changeAdup}>
                    <p className={styles.active}>添加用户</p>
                    <p>更新用户</p>
                </div>
                    {
                        adup ? <div className={ styles.item_box }>
                        {
                            getFieldDecorator('username', {
                                rules: [{ pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '请输入用户名' }],
                            })(
                            <Input placeholder="请输入用户名" />,
                            )
                        }
                        {
                            getFieldDecorator('password', {
                                rules: [{ pattern: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/, message: '请输入密码' }],
                            })(
                            <Input type="password" placeholder="请输入密码" />,
                            )
                        }
                        {
                            getFieldDecorator('identity', {
                                rules: [{ required: true, message: '请选择身份id' }],
                            })(
                            <Select className={styles.select} setfieldsvalue="请选择身份id">
                                {
                                    identArr && identArr.map(item=>{
                                        return <Option key={ item.identity_id } value={ item.identity_id }>{ item.identity_text }</Option>
                                    })
                                }
                            </Select>,
                            )
                        }
                        <div className={styles.btns}>
                            <Button className={styles.sure} onClick={hankAddUser}>确定</Button>
                            <Button className={styles.reset} onClick={ reset }>重置</Button>
                        </div>
                    </div> : <div className={styles.item_box}>
                        {
                            getFieldDecorator('userId', {
                                rules: [{ required: true, message: '请选择用户id' }],
                            })(
                                <Select className={styles.select} setfieldsvalue="请选择用户id">
                                {
                                    userArr && userArr.map(item=>{
                                        return <Option key={ item.user_id } value={ item.user_id }>{ item.user_name }</Option>
                                    })
                                }
                            </Select>,
                            )
                        }
                        {
                            getFieldDecorator('upUsername', {
                                rules: [{ pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '请输入用户名' }],
                            })(
                            <Input placeholder="请输入用户名" />,
                            )
                        }
                        {
                            getFieldDecorator('uPpassword', {
                                rules: [{ pattern: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/, message: '请输入密码' }],
                            })(
                            <Input type="password" placeholder="请输入密码" />,
                            )
                        }
                        {
                            getFieldDecorator('upIdentity', {
                                rules: [{ required: true, message: '请选择身份id' }],
                            })(
                            <Select className={styles.select} setfieldsvalue="请选择身份id">
                                {
                                    identArr && identArr.map(item=>{
                                        return <Option key={ item.identity_id } value={ item.identity_id }>{ item.identity_text }</Option>
                                    })
                                }
                            </Select>,
                            )
                        }
                        <div className={styles.btns}>
                            <Button className={styles.sure} onClick={hankUpuser}>确定</Button>
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
                    {
                        getFieldDecorator('identName', {
                            rules: [{  required: true, message: '请输入身份名称' }],
                        })(
                        <Input placeholder="请输入身份名称" />,
                        )
                    }
                    <div className={styles.btns}>
                        <Button className={styles.sure} onClick={hankIdent}>确定</Button>
                        <Button className={styles.reset}>重置</Button>
                    </div>
                </div>
            </Form-Item>
            <Form-Item class={styles.wrap_item}>
                <div className={styles.tits}>
                    <p className={styles.active}>添加api接口权限</p>
                </div>
                <div className={styles.item_box}>
                    {
                        getFieldDecorator('apiText', {
                            rules: [{  required: true, message: '请输入api接口权限名称' }],
                        })(
                        <Input placeholder="请输入api接口权限名称" />,
                        )
                    }
                    {
                        getFieldDecorator('apiUrl', {
                            rules: [{  required: true, message: '请输入api接口权限url' }],
                        })(
                        <Input placeholder="请输入api接口权限url" />,
                        )
                    }
                    {
                        getFieldDecorator('apiMehtod', {
                            rules: [{  required: true, message: '请输入api接口权限方法' }],
                        })(
                        <Input placeholder="请输入api接口权限方法" />,
                        )
                    }
                    <div className={styles.btns}>
                        <Button className={styles.sure} onClick={hankAddApi}>确定</Button>
                        <Button className={styles.reset}>重置</Button>
                    </div>
                </div>
            </Form-Item>
            <Form-Item class={styles.wrap_item}>
                <div className={styles.tits}>
                    <p className={styles.active}>添加视图接口权限</p>
                </div>
                <div className={styles.item_box}>
                    {
                        getFieldDecorator('viewAuthority', {
                            rules: [{  required: true, message: '请输入身份名称' }],
                        })(
                        <Select className={styles.select} setfieldsvalue="请选择已有视图">
                            {
                                viewArr && viewArr.map(item=>{
                                    return <Option key={ item.view_authority_id } value={ item.view_id }>{ item.view_authority_text }</Option>
                                })
                            }
                        </Select>,
                        )
                    }
                    <div className={styles.btns}>
                        <Button className={styles.sure} onClick={hankAddView}>确定</Button>
                        <Button className={styles.reset}>重置</Button>
                    </div>
                </div>
            </Form-Item>
            <Form-Item class={styles.wrap_item}>
                <div className={styles.tits}>
                    <p className={styles.active}>给身份设置api接口权限</p>
                </div>
                <div className={styles.item_box}>
                    {
                        getFieldDecorator('identity', {
                            rules: [{  required: true, message: '请选择身份id' }],
                        })(
                        <Select className={styles.select} setfieldsvalue="请选择身份id">
                            {
                                identArr && identArr.map(item=>{
                                    return <Option key={ item.identity_id } value={ item.identity_id }>{ item.identity_text }</Option>
                                })
                            }
                        </Select>,
                        )
                    }
                    {
                        getFieldDecorator('apiId', {
                            rules: [{  required: true, message: '请选择api接口权限数据' }],
                        })(
                            <Select className={styles.select} setfieldsvalue="请选择api接口权限数据">
                            {
                                apiArr && apiArr.map(item=>{
                                    return <Option key={ item.api_authority_id } value={ item.api_authority_id }>{ item.api_authority_text }</Option>
                                })
                            }
                        </Select>,
                        )
                    }
                    <div className={styles.btns}>
                        <Button className={styles.sure} onClick={HankIdentityApi}>确定</Button>
                        <Button className={styles.reset}>重置</Button>
                    </div>
                </div>
            </Form-Item>
            <Form-Item class={styles.wrap_item}>
                <div className={styles.tits}>
                    <p className={styles.active}>给身份设置视图权限</p>
                </div>
                <div className={styles.item_box}>
                    {
                        getFieldDecorator('identity', {
                            rules: [{  required: true, message: '请选择身份id' }],
                        })(
                        <Select className={styles.select} setfieldsvalue="请选择身份id">
                            {
                                identArr && identArr.map(item=>{
                                    return <Option key={ item.identity_id } value={ item.identity_id }>{ item.identity_text }</Option>
                                })
                            }
                        </Select>,
                        )
                    }
                    {
                        getFieldDecorator('IdentityView', {
                            rules: [{  required: true, message: '请选择视图id' }],
                        })(
                        <Select className={styles.select} setfieldsvalue="请选择视图id">
                            {
                                viewArr && viewArr.map(item=>{
                                    return <Option key={ item.view_authority_id } value={ item.view_authority_id }>{ item.view_authority_text }</Option>
                                })
                            }
                        </Select>,
                        )
                    }
                    <div className={styles.btns}>
                        <Button className={styles.sure} onClick={HankIdentityView}>确定</Button>
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
        }, 
        getUser(){
            dispatch({
                type:"addUser/getUser"
            })
        },
        addUser(payload){
            dispatch({
                type:"addUser/addUser",
                payload
            })
        },
        addIdent(payload){
            dispatch({
                type:"addUser/addIdent",
                payload
            })
        }, 
        addAuthorityApi(payload){
            dispatch({
                type:"addUser/addAuthorityApi",
                payload
            })
        }, 
        addAuthorityView(payload){
            dispatch({
                type:"addUser/addAuthorityView",
                payload
            })
        }, 
        setIdentityApi(payload){
            dispatch({
                type:"addUser/setIdentityApi",
                payload
            })
        }, 
        setIdentityView(payload){
            dispatch({
                type:"addUser/setIdentityView",
                payload
            })
        },
        upIdent(payload){
            dispatch({
                type:"addUser/upIdent",
                payload
            })
        }
    }
  }

export default connect(mapStateToProps, mapDisaptchToProps)(Form.create()(AddUser));
