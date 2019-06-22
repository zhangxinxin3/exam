import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import { Layout, Select } from 'antd';
import { Switch, Route, Redirect } from "dva/router";
import Menus from "@/components/Menu";
import Add from "@/views/main/Questions/add/add";
import Type from "@/views/main/Questions/type/type";
import View from "@/views/main/Questions/view/view";
import Dialog from "./Questions/dialog/dialog";
import Edit from "./Questions/edit/edit";
import Exhibition from "./User/exhibition/exhibition";
import AddExam from "./Exam/addExam/addExam";
import AddMark from "./Exam/addMark/addMark"
import Adduser from './User/addUser/addUser';
import ExamList from './Exam/examList/examList';
import Class from './Class/class/class';
import Classroom from './Class/classroom/classroom';
import Student from './Class/student/student';
import Mark from './Mark/approved/approved';
import MarkList from './Mark/markList/markList';
import Detail from './Mark/detail/detail';
import styles from './MainPage.scss';

const { Header, Content, Sider } = Layout;
const { Option } = Select;
function MainPage(props) {
    // useEffect(()=>{
    //     props.getUser(),
    //     props.changeLocale(),
    //     props.getuserinfo()
    // },[])
    console.log(props)
    let change = e =>{
        props.changeLocale({
            e
        })
    }
    return (
        <Layout style={{height:"100%"}}>
            <Header className={styles.header} style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div><img src="../../images/logo.png" alt=""/></div>
                <Select onChange={change} placeholder="中文">
                    <Option key="zh">中文</Option>
                    <Option key="en">英文</Option>
                </Select>
            </Header>
            <Layout className={styles.ant_layout}>
                <Sider >
                    <Menus />
                </Sider>
                <Content className={styles.ant_layout_content} style={{ height: "100%" }}>
                    <Switch>
                        <Redirect exact from="/" to="/questions/add"></Redirect>
                        <Route path="/questions/type" component={Type}></Route>
                        <Route path="/questions/view" component={View}></Route>
                        <Route path="/questions/dialog" component={Dialog}/>
                        <Route path="/questions/edit" component={Edit}/>
                        <Route path="/user/addUser" component={Adduser}></Route>
                        <Route path="/exam/examList" component={ExamList}></Route>
                        <Route path="/user/show" component={Exhibition}></Route>
                        <Route path="/exam/addExam" component={AddExam}></Route>
                        <Route path="/exam/addMark" component={AddMark}></Route>
                        <Route path="/class/class" component={Class}></Route>
                        <Route path="/class/classroom" component={Classroom}></Route>
                        <Route path="/class/student" component={Student}></Route>
                        <Route path="/marking/approved" component={Mark}></Route>
                        <Route path="/marking/classmate" component={MarkList}></Route>
                        <Route path="/marking/detail" component={Detail}></Route>
                        <Route path="/questions/add" component={Add}></Route>
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    );
}

const mapStateToProps = state =>{
    return {
        locale:state.global.locale
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser() {
            dispatch({
                type: 'add/getUser'
            })
        },
        changeLocale: payload => {
            dispatch({
                type: "global/changeLocale",
                payload
            })
        },
        changeLocale:payload=>{
            dispatch({
                type:"global/changeLocale",
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);