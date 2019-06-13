import React from 'react';
// import { connect } from 'dva';
// import styles from './MainPage.css';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from "dva/router";
import Menus from "@/components/Menu";
import Add from "./Class/add/add";
import Type from "./Class/type/type";
import View from "./Class/view/view";
const { Header, Content, Sider } = Layout;
function MainPage(props) {
  return (
    <Layout style={{height:"100%"}}>
      <Header>头</Header>
      <Layout>
        <Sider>
          <Menus />
        </Sider>
        <Content style={{height:"100%"}}>
            <Switch>
                <Redirect exact from="/" to="/questions/add"></Redirect>
                <Route path="/questions/type" component={Type}></Route>
                <Route path="/questions/view" component={View}></Route>
                <Route path="/questions/add" component={Add}></Route>
            </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}

MainPage.propTypes = {
};

export default MainPage;