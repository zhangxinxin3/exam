import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Layout, Select, Menu, Dropdown, message } from 'antd';
import { Switch, Route, Redirect } from "dva/router";
import styles from "./MainPage.scss";
import Menus from "../../components/Menus"
const { Header, Content, Sider } = Layout;
const { Option } = Select;
function MainPage(props) {
    console.log(props)
    if(!props.myView.length){
        return null;
    }
    useEffect(() => {
        // props.getUser(),
        // props.changeLocale(),
        // props.getuserinfo(),
        // props.removeToken()
    }, [])
    console.log(props)
    let logOut = ({ key }) => {
        if (key === '4') {
            props.removeToken();
            <Switch>
                <Redirect to="/login" />
            </Switch>
        }
    }
    const menu = (
        <Menu onClick={logOut}>
            <Menu.Item key="1">个人中心</Menu.Item>
            <Menu.Item key="2">我的班级</Menu.Item>
            <Menu.Item key="3">设置</Menu.Item>
            <Menu.Item key="4">退出登录</Menu.Item>
        </Menu>
    );
    let change = e => {
        props.changeLocale({
            e
        })
    }
    let updateImg = e => {
        console.log(e)
    }
    return (
        <Layout style={{ height: "100%" }}>
            <Header className={styles.header} style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div><img src="../../images/logo.png" alt="" /></div>
                <Select onChange={change} placeholder="中文" className={styles.lang}>
                    <Option key="zh">中文</Option>
                    <Option key="en">英文</Option>
                </Select>
                <Dropdown overlay={menu}>
                    <a href="#" className="ant-dropdown-link" className={styles.hover}>
                        <div className={styles.img}></div>
                        <div className={styles.titName}>123456789</div>
                    </a>
                </Dropdown>
            </Header>
            <Layout className={styles.ant_layout}>
                <Sider >
                    <Menus />
                </Sider>
                <Content className={styles.ant_layout_content} style={{ height: "100%" }}>
                    <Switch>
                        <Redirect exact from="/" to="/questions/add"></Redirect>
                        {
                            props.myView.map(item=>{
                                if(item.children){
                                    return item.children.map((value,key)=>{
                                        return <Route key={value.path} path={value.path} component={value.component} />
                                    })
                                }
                            })
                        }
                        {/* 403路由 */}
                        {
                            props.forbiddenView.map(item=>{
                                return <Redirect key={item} from={item} to="/403" />
                            })
                        }
                        {/* 剩余路由去404 */}
                        <Redirect to="/404" />
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    );
}

const mapStateToProps = state => {
    return {
        locale: state.global.locale,
        myView: state.user.myView,
        forbiddenView:state.user.forbiddenView
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
        changeLocale: payload => {
            dispatch({
                type: "global/changeLocale",
                payload
            })
        },
        removeToken() {
            dispatch({
                type: 'user/logout'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);