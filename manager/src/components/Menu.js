import { connect } from "dva";
import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "dva/router";
import { injectIntl } from 'react-intl';

const { SubMenu } = Menu;
function Menus(props) {
    console.log(props)
    return <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={['questions']}
        style={{ height: '100%', borderRight: 0, position: 'fixed', left: 0, width: "200px" }}
    >
        {
            props.myView.map((item) => {
                return <SubMenu key={item.name} title={
                    <span>
                        <Icon type={item.icon}></Icon>
                        {
                            props.intl.formatMessage({ id: item.name })
                        }
                    </span>
                }>
                    {
                        item.children.map((value, key) => {
                            return <Menu.Item key={value.name}>
                                <Link to={value.path}>{
                                    props.intl.formatMessage({ id: value.name })
                                }</Link>
                            </Menu.Item>
                        })
                    }
                </SubMenu>
            })
        }
        {/* <SubMenu
            key="questions"
            style={{ width: "200px" }}
            title={
                <span>
                    <Icon type="sliders" />
                    {props.intl.formatMessage({ id: "router.questions" })}
                </span>
            }
        >
            <Menu.Item key="1">
                <Link to="/questions/add">{props.intl.formatMessage({ id: "router.questions.add" })}</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/questions/type">{props.intl.formatMessage({ id: "router.questions.type" })}</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/questions/view">{props.intl.formatMessage({ id: "router.questions.view" })}</Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu
            key="person"
            title={
                <span>
                    <Icon type="sliders" />
                    {props.intl.formatMessage({ id: "router.user" })}
                </span>
            }
        >
            <Menu.Item key="4">
                <Link to="/questions/addUser">{props.intl.formatMessage({ id: "router.user.add" })}</Link>
            </Menu.Item>
            <Menu.Item key="5">
                <Link to="/user/show">{props.intl.formatMessage({ id: "router.user.view" })}</Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu
            key="exam"
            title={
                <span>
                    <Icon type="sliders" />
                    {props.intl.formatMessage({ id: "router.Test" })}
                </span>
            }
        >
            <Menu.Item key="6">
                <Link to="/exam/addExam">
                    {props.intl.formatMessage({ id: "router.Test.add" })}
                </Link>
            </Menu.Item>
            <Menu.Item key="7">
                <Link to="/questions/examList">
                    {props.intl.formatMessage({ id: "router.Test.list" })}
                </Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu
            key="class"
            title={
                <span>
                    <Icon type="sliders" />
                    {props.intl.formatMessage({ id: "router.Class" })}
                </span>
            }
        >
            <Menu.Item key="8">
                <Link to="/class/class">
                    {props.intl.formatMessage({ id: "router.Class.manager" })}

                </Link>
            </Menu.Item>
            <Menu.Item key="9">
                <Link to="/class/room">
                    {props.intl.formatMessage({ id: "router.Class.room" })}

                </Link>
            </Menu.Item>
            <Menu.Item key="10">
                <Link to="/class/student">
                    {props.intl.formatMessage({ id: "router.Class.student" })}
                </Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu
            key="juan"
            title={
                <span>
                    <Icon type="sliders" />
                    {props.intl.formatMessage({ id: "router.Marking" })}
                </span>
            }
        >
            <Menu.Item key="11">
                <Link to="/class/type">
                    {props.intl.formatMessage({ id: "router.Marking.class" })}
                </Link>
            </Menu.Item>
        </SubMenu> */}
    </Menu>
}
const mapStateToProps = state => {
    return {
        myView: state.user.myView
    }
}
export default injectIntl(connect(mapStateToProps)(Menus));