import React from 'react';
import { connect } from 'dva';
// import styles from './MainPage.css';
import { Layout, Menu, Breadcrumb, Icon, Dropdown } from 'antd';
import { Switch, Route } from "dva/router";
import Menus from "../../components/Menu";

// const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
// const menu = (
//   <Menu>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
//         个人中心
//       </a>
//     </Menu.Item>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
//         我的班级
//       </a>
//     </Menu.Item>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
//         设置
//       </a>
//     </Menu.Item>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
//         退出登录
//       </a>
//     </Menu.Item>
//   </Menu>
// );
function MainPage() {
  return (
    // <div className={styles.wrap}>
    //   <Layout className={styles.wrap}>
    //     <Header className={styles.header}>
    //       <div className={styles.header_img}></div>
    //       <Dropdown overlay={menu} className={styles.header_right}>
    //         {/* <a className="ant-dropdown-link" href="#">
    //           sabjdka
    //         </a> */}
    //         <div className={styles.box}>
    //           <div className={styles.box_img}></div>
    //           <span>chenmanjie</span>
    //         </div>
    //       </Dropdown>
    //     </Header>
    //     <Layout>
    //       <Sider className={styles.left_slide}>
    //         <Menu
    //           mode="inline"
    //           defaultSelectedKeys={['1']}
    //           defaultOpenKeys={['sub1']}
    //           className={styles.slide}
    //         >
    //           <SubMenu
    //             key="sub1"
    //             title={
    //               <span>
    //                 <Icon type="sliders" />
    //                 试题管理
    //           </span>
    //             }
    //             className={styles.font}
    //           >
    //             <Menu.Item key="1" className={styles.font}>添加试题</Menu.Item>
    //             <Menu.Item key="2">试题分类</Menu.Item>
    //             <Menu.Item key="3">查看试题</Menu.Item>
    //           </SubMenu>
    //           <SubMenu
    //             key="sub2"
    //             title={
    //               <span>
    //                 <Icon type="user" />
    //                 用户管理
    //           </span>
    //             }
    //             className={styles.font}
    //           >
    //             <Menu.Item key="5">添加用户</Menu.Item>
    //             <Menu.Item key="6">用户展示</Menu.Item>
    //           </SubMenu>
    //           <SubMenu
    //             key="sub3"
    //             title={
    //               <span>
    //                 <Icon type="schedule" />
    //                 考试管理
    //           </span>
    //             }
    //             className={styles.font}
    //           >
    //             <Menu.Item key="9">添加考试</Menu.Item>
    //             <Menu.Item key="10">试卷列表</Menu.Item>
    //           </SubMenu>
    //           <SubMenu
    //             key="sub4"
    //             title={
    //               <span>
    //                 <Icon type="project" />
    //                 班级管理
    //           </span>
    //             }
    //             className={styles.font}
    //           >
    //             <Menu.Item key="11">班级管理</Menu.Item>
    //             <Menu.Item key="12">教室管理</Menu.Item>
    //             <Menu.Item key="13">学生管理</Menu.Item>
    //           </SubMenu>
    //           <SubMenu
    //             key="sub5"
    //             title={
    //               <span>
    //                 <Icon type="project" />
    //                 阅卷管理
    //           </span>
    //             }
    //             className={styles.font}
    //           >
    //             <Menu.Item key="14">待批班级</Menu.Item>
    //           </SubMenu>
    //         </Menu>
    //       </Sider>
    //       <Layout style={{ padding: '0 24px 24px' }}>
    //         <Breadcrumb style={{ margin: '16px 0' }}>
    //           <Breadcrumb.Item>Home</Breadcrumb.Item>
    //           <Breadcrumb.Item>List</Breadcrumb.Item>
    //           <Breadcrumb.Item>App</Breadcrumb.Item>
    //         </Breadcrumb>
    //         <Content
    //           style={{
    //             background: '#fff',
    //             padding: 24,
    //             margin: 0,
    //             minHeight: 280,
    //           }}
    //         >
    //           Content
    //     </Content>
    //       </Layout>
    //     </Layout>
    //   </Layout>,
    // </div>
    <Layout>
      <Header>头</Header>
      <Layout>
        <Sider>
          <Menus />
        </Sider>
        <Content>
          <Switch>
            <Route path="/questions/add" component={null}></Route>
            <Route path="/questions/type" component={null}></Route>
            <Route path="/questions/view" component={null}></Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}

MainPage.propTypes = {
};

export default connect()(MainPage);