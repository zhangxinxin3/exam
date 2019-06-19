import {injectIntl} from "react-intl";
import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "dva/router";
import { injectIntl } from 'react-intl';

const { SubMenu } = Menu;
function Menus(props) {
    // console.log(props.intl)
    return <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['questions']}
        style={{ height: '100%', borderRight: 0 ,position:'fixed',left:0,width:"200px"}}
    >
        <SubMenu
            key="questions"
            style={{width:"200px"}}
            title={
                <span>
                    <Icon type="sliders" />
                    {props.intl.formatMessage({id:"router.questions"})}
        </span>
            }
        >
            <Menu.Item key="1">
                <Link to="/questions/add">{props.intl.formatMessage({id:'questions.add'})}</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/questions/type">{props.intl.formatMessage({id:'questions.type'})}</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/questions/view">{props.intl.formatMessage({id:'questions.view'})}</Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu
            key="person"
            title={
                <span>
                    <Icon type="sliders" />
                    {props.intl.formatMessage({id:'router.user'})}
        </span>
            }
        >
            <Menu.Item key="4">
                <Link to="/user/addUser">{props.intl.formatMessage({id:'user.addUser'})}</Link>
            </Menu.Item>
            <Menu.Item key="5">
                <Link to="/user/show">{props.intl.formatMessage({id:'user.show'})}</Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu
            key="exam"
            title={
                <span>
                    <Icon type="sliders" />
                    {props.intl.formatMessage({id:'router.exam'})}
        </span>
            }
        >
            <Menu.Item key="6">
                <Link to="/exam/addExam">{props.intl.formatMessage({id:'exam.addExam'})}</Link>
            </Menu.Item>
            <Menu.Item key="7">
                <Link to="/exam/examList">{props.intl.formatMessage({id:'exam.examList'})}</Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu
            key="class"
            title={
                <span>
                    <Icon type="sliders" />
                    {props.intl.formatMessage({id:'router.class'})}
        </span>
            }
        >
            <Menu.Item key="8">
                <Link to="/class/class">{props.intl.formatMessage({id:'class.class'})}</Link>
            </Menu.Item>
            <Menu.Item key="9">
                <Link to="/class/classroom">{props.intl.formatMessage({id:'class.classroom'})}</Link>
            </Menu.Item>
            <Menu.Item key="10">
                <Link to="/class/student">{props.intl.formatMessage({id:'class.student'})}</Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu
            key="juan"
            title={
                <span>
                    <Icon type="sliders" />
                    {props.intl.formatMessage({id:'router.marking'})}
        </span>
            }
        >
            <Menu.Item key="11">
                <Link to="/marking/approved">{props.intl.formatMessage({id:'marking.approved'})}</Link>
            </Menu.Item>
        </SubMenu>
    </Menu>
}
export default injectIntl(Menus);