import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "dva/router";
const { SubMenu } = Menu;
function Menus(props) {
    return <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['questions']}
        style={{ height: '100%', borderRight: 0 ,position:'fixed',left:0,width:"200px"}}
    >
        <SubMenu
            key="questions"
            title={
                <span>
                    <Icon type="sliders" />
                    試題管理
        </span>
            }
        >
            <Menu.Item key="1">
                <Link to="/questions/add">添加試題</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/questions/type">試題分類</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/questions/view">查看試題</Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu
            key="person"
            title={
                <span>
                    <Icon type="sliders" />
                    用戶管理
        </span>
            }
        >
            <Menu.Item key="1">
                <Link to="/questions/add">添加用戶</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/questions/type">用戶展示</Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu
            key="exam"
            title={
                <span>
                    <Icon type="sliders" />
                    考試管理
        </span>
            }
        >
            <Menu.Item key="1">
                <Link to="/questions/add">添加考試</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/questions/type">試卷列表</Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu
            key="class"
            title={
                <span>
                    <Icon type="sliders" />
                    班級管理
        </span>
            }
        >
            <Menu.Item key="1">
                <Link to="/questions/add">班級管理</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/questions/type">教室管理</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/questions/view">學生管理</Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu
            key="juan"
            title={
                <span>
                    <Icon type="sliders" />
                    閱捲管理
        </span>
            }
        >
            <Menu.Item key="1">
                <Link to="/questions/add">待批班級</Link>
            </Menu.Item>
        </SubMenu>
    </Menu>
}
export default Menus;