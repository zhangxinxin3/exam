import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from "dva/router";
import Menus from "@/components/Menu";
import Add from "./Class/add/add";
import Type from "./Class/type/type";
import View from "./Class/view/view";
import Dialog from "./Class/dialog/dialog";
import Edit from "./Class/edit/edit";
import Exhibition from "./User/exhibition/exhibition";
import AddExam from "./Exam/addExam/addExam";
import AddMark from "./Exam/addMark/addMark"
const { Header, Content, Sider } = Layout;

function MainPage(props) {
    return (
        <Layout style={{height:"100%"}}>
            <Header>
                <div><img src="../../images/logo.png" alt=""/></div>
            </Header>
            <Layout>
                <Sider >
                <Menus />
                </Sider>
                <Content style={{height:"100%"}}>
                    <Switch>
                        <Redirect exact from="/" to="/questions/add"></Redirect>
                        <Route path="/questions/type" component={Type}></Route>
                        <Route path="/questions/view" component={View}></Route>
                        <Route path="/questions/dialog" component={Dialog}/>
                        <Route path="/questions/edit" component={Edit}/>
                        <Route path="/questions/add" component={Add}></Route>
                        <Route path="/user/show" component={Exhibition}></Route>
                        <Route path="/exam/addExam" component={AddExam}></Route>
                        <Route path="/exam/addMark" component={AddMark}></Route>
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    );
}

const mapStateToProps = start =>{
    return {
        ...start
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        getUser(){
            dispatch({
                type:'add/getUser'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);