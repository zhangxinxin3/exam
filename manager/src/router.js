import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LoginPage from '@/views/login/loginPage';
// import Login from '@/views/login/login';
import MainPage from '@/views/main/MainPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;