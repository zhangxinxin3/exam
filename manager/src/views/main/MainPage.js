import React from 'react';
// import { connect } from 'dva';
// import styles from './MainPage.css';
import { Layout } from 'antd';
import { Switch, Route } from "dva/router";
import Menus from "@/components/Menu";
import Add from "./Class/add/add";
const { Header, Content, Sider } = Layout;
function MainPage(props) {
  return (
    <Layout>
      <Header>头</Header>
      <Layout>
        <Sider>
          <Menus />
        </Sider>
        <Content>
          <Switch>
            <Route path="/questions/add" component={Add}></Route>
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

export default MainPage;