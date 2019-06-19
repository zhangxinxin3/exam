import React, { useEffect } from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { connect } from 'dva';
import { Link } from "dva/router";
import styles from './logins.css';

function LoginPage(props) {

    // 获取login
    //   let {login,history} = props;
    //   useEffect(()=>{
    //     login({
    //       user_name: 'chenmanjie',
    //       user_pwd: 'Chenmanjie123!'
    //     })
    //   }, []);

    //判断是否登陆
    useEffect(() => {
        console.log("isLogin...", props);
        if (props.user.isLogin === 1) {
            //1.提示登录成功
            message.success('登录成功')
            //2.存储cookie
            //3.跳转主页面
            // console.log('props.history...',props.history)
            // let pathName = decodeURIComponent(props.history.location.search.split('=')[1]);
            // props.history.replace(pathName);   
            // console.log(pathName)
            props.history.push("/main");
        } else if (props.user.isLogin === -1) {
            //登录失败
            message.error('登录失败')
        }
    }, [props.user.isLogin])
    // 处理表单提交
    let handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                // 调登录接口
                props.login({
                    user_name: values.username,
                    user_pwd: values.password
                })
            }
        });
    };
    // 表单校验
    const { getFieldDecorator } = props.form;
    return <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
            {getFieldDecorator('username', {
                validateTrigger: 'onBlur',
                rules: [{ required: true, message: '请输入正确的用户名' }],
            })(
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                />,
            )}
        </Form.Item>
        <Form.Item>
            {getFieldDecorator('password', {
                rules: [{ pattern: /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).*$/, message: '请输入正确的密码' }],
            })(
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                />,
            )}
        </Form.Item>
        <Form.Item>
            {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
                Forgot password
      </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
      </Button>
            Or <a href="">register now!</a>
        </Form.Item>
    </Form>;
}

// props的类型检查
LoginPage.propTypes = {

}
// props的默认值
LoginPage.defaultProps = {

}

const mapStateToProps = state => {
    //   console.log('state...', state);
    return {
        ...state
    }
}

const mapDisaptchToProps = dispatch => {
    return {
        login(payload) {
            dispatch({
                type: 'user/login',
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Form.create()(LoginPage))