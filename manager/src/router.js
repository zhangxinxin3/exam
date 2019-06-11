import React from 'react';
import { Router, Route, Switch } from 'dva/router';
<<<<<<< HEAD
import Login from './views/login/login';
import MainPage from './views/main/MainPage';
=======
import LoginPage from './views/login/loginPage';
>>>>>>> 53142d4a05fadc355d96f777516b5973cfcc2327

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
<<<<<<< HEAD
        <Route path="/" exact component={Login} />
        <Route path="/main" exact component={MainPage} />
=======
        <Route path="/" exact component={LoginPage} />
>>>>>>> 53142d4a05fadc355d96f777516b5973cfcc2327
      </Switch>
    </Router>
  );
}

export default RouterConfig;