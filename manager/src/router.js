import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LoginPage from '@/views/login/loginPage';
// import Login from '@/views/login/login';
import MainPage from '@/views/main/MainPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/main" component={MainPage} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;