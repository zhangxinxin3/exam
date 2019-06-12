import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LoginPage from './views/login/loginPage';
import MainPage from './views/main/MainPage';
import '../.webpackrc.js';

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