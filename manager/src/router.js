import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Logins from '@/views/logins/logins';
// import Login from '@/views/login/login';
import MainPage from '@/views/main/MainPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" exact component={Logins} /> */}
        <Route path="/" exact component={Logins} />
        <Route path="/main" exact component={MainPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;