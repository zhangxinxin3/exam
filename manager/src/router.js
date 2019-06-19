import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LoginPage from '@/views/login/loginPage';
// import Login from '@/views/login/login';
import MainPage from '@/views/main/MainPage';
import { connect } from "dva";
//引入国际化
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import zh from "react-intl/locale-data/zh";
import zhCN from "@/lang/zh-CN.js";
import enUS from "@/lang/en-US.js";
const localMap = {
  en: enUS,
  zh: zhCN
}
addLocaleData([...en, ...zh]);
const mapStateToProps = state => {
  return {
    locale: state.global.locale
  }
}
const RouterView = connect(mapStateToProps)(({locale, history}) => {
  console.log(locale)
  return <IntlProvider locale={locale} messages={localMap[locale]}>
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </Router>
  </IntlProvider>
})
function RouterConfig({ history }) {
  return (
    <RouterView history={history}></RouterView>
  );
}

export default RouterConfig;
