import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from "dva/router";
import Menus from "@/components/Menu";
import Add from "./Class/add/add";
import Type from "./Class/type/type";
import View from "./Class/view/view";
import Dialog from "./Class/dialog/dialog";
import Edit from "./Class/edit/edit";
import styles from './MainPage.scss'

const { Header, Content, Sider } = Layout;

function MainPage(props) {

    let { getUser, userData } = props; 

    useEffect(()=>{
        getUser()
    },[])

    return (
        <Layout style={{height:"100%"}}>
            <Header className={ styles.header }>
                <img src="../../images/logo.png" alt="" />
                <div className={ styles.user }>
                    <img src="" alt="" />
                    <p>{ userData && userData.user_name }</p>
                </div>
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