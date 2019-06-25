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
    </Menu>
}
const mapStateToProps = state => {
    return {
        myView: state.user.myView
    }
}
export default injectIntl(connect(mapStateToProps)(Menus));