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
//   if (Math.power == null) {
//     // 此判断非常重要，如果Math.power 已经在别的地方定义过了，再次这样重新定义，会导致循环引用，从而引发
//     // Uncaught RangeError: Maximum call stack size exceeded 错误
// Math.power = Math.pow;

// Math.pow = function(x, y) {
//     if(x != 0) {
//         return Math.pow(x, y);
//     } else {
//         return 0;
//     }
// }
// } // end if
  return (
    <Layout style={{height:"100%"}}>
      <Header>头</Header>
      <Layout>
        <Sider >
          <Menus />
        </Sider>
        <Content style={{height:"100%"}}>
            <Switch>
                <Redirect exact from="/" to="/questions/add"></Redirect>
                <Route path="/questions/add" component={Add}></Route>
                <Route path="/questions/type" component={Type}></Route>
                <Route path="/questions/view" component={View}></Route>
            </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}

MainPage.propTypes = {
};

export default MainPage;