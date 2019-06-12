import React,{useEffect} from 'react';
import { connect  } from 'dva';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import './loginPage.scss';

function LoginPage(props){
    let {login} = props;    
    useEffect(()=>{
        if(props.isLogin===1){
            message.success('登陆成功')
            let pathName = decodeURIComponent(props.history.location.search.split('-')[1])
            props.history.replace(pathName);
        }else if(props.isLogin === -1){
            message.error('登陆失败')
        }
    },[props.isLogin])

    let handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                login({
                    user_name: values.username,
                    user_pwd: values.password
                })
            }
        });
    };


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
            <Button type="primary" htmlType="submit" className="login-form-button">
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