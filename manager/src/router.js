import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LoginPage from './views/login/loginPage';
import MainPage from './views/main/MainPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/main" exact component={MainPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;