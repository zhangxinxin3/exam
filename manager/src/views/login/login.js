<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router'
import styles from './login.css'

// class Login extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             userName: '',
//             userPwd: '',
//             nameflag: false,
//             psdflag: false
//         }
//     }

//     changeName(e) {
//         if (e.target.value === 'chenmanjie') {
//             this.setState({
//                 userName: e.target.value,
//                 nameflag: true
//             })
//         }
//     }

//     changePwd(e) {
//         if (e.target.value === 'chenmanjie123!') {
//             this.setState({
//                 userPwd: e.target.value,
//                 pwdflag: true
//             })
//         }
//     }

//     login() {
//         // console.log(this)
//         // if(this.state.nameflag && this.state.pwdflag){
//         //     console.log(this.props)
//         //     let {history} = this.props;
//         //     history.push({
//         //         pathname:'/home'
//         //     })
//         // }
//     }

//     render() {
//         let { userName, userPwd } = this.state;
//         return (
//             <div className={styles.wrapper}>
//                 <div className={styles.wrap}>
//                     <div className={styles.writeIn}>
//                         <img src={require("../../assets/yonghu.png")} alt="" />
//                         <input type="text" value={userName} placeholder="请输入用户名" onChange={this.changeName.bind(this)} />
//                     </div>
//                     <div className={styles.writeIn}>
//                         <img src={require("../../assets/mima.png")} alt="" />
//                         <input type="text" value={userPwd} placeholder="请输入用户密码" onChange={this.changePwd.bind(this)} />
//                     </div>
//                     <div className={styles.check}>
//                         <div>
//                             <span></span>
//                             <p>记住密码</p>
//                         </div>
//                         <p>忘记密码</p>
//                     </div>
//                     <Link className={styles.btn} to="/main">登陆</Link>
//                 </div>
//             </div>
//         );
//     }
// }

// function Login(props) {
//     console.log(props);
//     function changeName(e){
//         console.log(e)
//     }

//     function changePwd(){
//         console.log('222')
//     }

//     function login(){
//         console.log(333)
//     }



// Login.defaultProps = {
//     userName:'111',
//     userPwd:'222'
// };

// Login.propTypes = {

// };

// export default connect()(Login);









class LoginPage extends Component {
    componentDidMount() {
        let { login } = this.props;
        login({
            user_name: "chenmanjie",
            user_pwd: "Chenmanjie123!"
        })
    }
    render() {
        return (
            <div className={styles.wrapper}>
                
            </div>
        );
    }

}
const mapStateToProps = state => {
    console.log("state...", state);
    return {}
}
const mapDispatchToProps = dispatch => {
    return {
        login(payload) {
            dispatch({
                type: 'user/login',
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
=======
import React,{Component} from 'react';
import { connect  } from 'dva';
import { Link } from 'dva/router'
// import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './login.css'

class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
            nameflag :false,
            psdflag :false
        }
    }

    componentDidMount(){
        let {login}  = this.props;
        login({
            user_name:"chenmanjie",
            user_pwd:"Chenmanjie123!"
        })
    }

    changeName(e){
        if(e.target.value === 'chenmanjie'){
            this.setState({
                userName : e.target.value,
                nameflag:true
            })
        }
    }

    changePwd(e){
        if(e.target.value === 'chenmanjie123!'){
            this.setState({
                userPwd : e.target.value,
                pwdflag:true
            })
        }
    }

    render(){
        let {userName,userPwd} = this.state;
        return (
            <div className={styles.wrapper}>
                <div className={styles.wrap}>
                    <div className={styles.writeIn}>
                        <img src={require("../../assets/yonghu.png")} alt="" />
                        <input type="text" value={userName} placeholder="请输入用户名" onChange={this.changeName.bind(this)} />
                    </div>
                    <div className={styles.writeIn}>
                        <img src={require("../../assets/mima.png")} alt="" />
                        <input type="text" value={userPwd} placeholder="请输入用户密码" onChange={this.changePwd.bind(this)} />
                    </div>
                    <div className={styles.check}>
                        <div>
                            <span></span>
                            <p>记住密码</p>
                        </div>
                        <p>忘记密码</p>
                    </div>
                    <Link className={styles.btn} to="/main">登陆</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state=>{
    console.log('state...',state)
    return {};
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

export default connect(mapStateToProps,mapDispatchToProps)(Login);
>>>>>>> 53142d4a05fadc355d96f777516b5973cfcc2327
