import React, {useEffect} from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { connect } from 'dva';
import './loginPage.scss';

function LoginPage(props){
  useEffect(()=>{
    if (props.isLogin === 1){
      message.success('登陆成功');
      let pathName = decodeURIComponent(props.history.location.search.split('=')[1]);
      props.history.replace(pathName);
    }else if(props.isLogin === -1){
      message.error('用户名或密码错误')
    }
  }, [props.isLogin]);

  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.login({
          user_name: values.username,
          user_pwd: values.password
        })
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return  <Form onSubmit={handleSubmit} className="login-form">
    <Form.Item>
      {getFieldDecorator('username', {
        validateTrigger: 'onBlur',
        rules: [{required: true, message: '请输入正确的用户名'}],
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

LoginPage.propTypes = {

}

LoginPage.defaultProps = {

}

const mapStateToProps = state=>{
  return {
    ...state.user
  }
}

const mapDisaptchToProps = dispatch=>{
  return {
    login(payload){
      dispatch({
        type: 'user/login',
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Form.create()(LoginPage))
