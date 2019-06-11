import React,{useState,useEffect} from 'react';
import { connect  } from 'dva';
// import { Link } from 'dva/router';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './loginPage.scss';

function LoginPage(props){
    console.log(useState)
    let {login,flag} = props;    
    useEffect(()=>{
        // login({
        //     user_name:"chenmanjie",
        //     user_pwd:"Chenmanjie123!"
        // })
    })

    useState(()=>{

    })

    let handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                login({
                    user_name: values.username,
                    user_pwd: values.password
                })
                flag = true;
            }else{
                flag = false;
            }
        });
    };

    // let rout = e =>{
    //     console.log(e)
    // }

    const { getFieldDecorator } = props.form;
    return <Form onSubmit={handleSubmit} className="login-form" >
        <Form.Item>
            {getFieldDecorator('username', {
                validateTrigger:'onChange',
                rules: [{ required: true, message: '请输入用户名' }],
            })(
                <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入用户名"
                />,
            )}
        </Form.Item>
        <Form.Item>
            {getFieldDecorator('password', {
                    validateTrigger:'onInput',
                    rules: [{ pattern: /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).*$/, message: '请输入用户密码' }],
            })(
                <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="请输入用户密码"
                />,
            )}
        </Form.Item>
        <Form.Item>
            {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
            })(<Checkbox>记住密码</Checkbox>)}
            <a className="login-form-forgot" href="">
                忘记密码
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button" disabled={flag}>
                {/* <Link to="/main">登陆</Link> */}
                登陆
            </Button>
        </Form.Item>
    </Form>
}

LoginPage.propTypes={

}

LoginPage.defaultProps = {
    flag:false
}

const mapStateToProps = state=>{
    console.log('state...',state)
    return state.user;
}

const mapDispatchToProps = dispatch=>{
    return {
        login(payload){
            console.log(payload)
            dispatch({
                type:'user/login',
                payload
            })
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Form.create({ name: 'normal_login' })(LoginPage));