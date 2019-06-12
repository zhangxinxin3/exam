import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "dva/router";
const { SubMenu } = Menu;
function Menus() {
    return <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['questions']}
        style={{ height: '100%', borderRight: 0 }}
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
    </Menu>
}
export default Menus;