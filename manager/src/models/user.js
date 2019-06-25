import { login, getUserInfo, getViewAuthority } from '@/services'
import { setToken, getToken } from '@/utils/user'
import { routerRedux } from 'dva/router';

//引入路由表
import allViews from "@/router/config.js";
export default {
  // 命名空间
namespace: 'user',

  // 模块内部的状态
state: {
    isLogin: 0,
    userInfo: {},
    viewAuthority: [],//用户所拥有的视图权限
    myView: [],//拥有权限的前端路由
    forbiddenView: []//没有权限访问的路由
},

  // 订阅路由跳转
subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
        return history.listen(({ pathname }) => {
            // console.log(pathname)
            //1.判断去的页面是否是登录页面
            if (pathname.indexOf('/login') === -1) {
            //1.1判断是否有登录态
            if (!getToken()) {
                //1.1.1没有登录态，利用redux做路由跳转
                dispatch(routerRedux.replace({
                pathname: `/login`,
                search: `?redirect=${encodeURIComponent(pathname)}`
                }))
            } else {
                ///1.1.2去登录页面，如果以登陆调回首页
                dispatch({
                type: 'getuserinfo'
                })
            }
            //1.2用户没有登录态
            } else {
            //1.2.1去登录页面，如果以登陆调回首页
            if (getToken()) {
                //利用redux做路由跳转
                dispatch(routerRedux.replace({
                pathname: `/`
                }))
            }
            }
        });
    },
  },

  // 异步操作
  effects: {
    *login({ payload }, { call, put }) {
        //1.调用登陆接口
        let data = yield call(login, payload);
        console.log('data...', data)
        //2.设置登录态到cookie里面
        if (data.code === 1) {
            setToken(data.token);
        }
        //3.更新redux重登陆状态
        yield put({
            type: 'updateLogin',
            payload: data.code === 1 ? 1 : -1
        })
    },
    *getuserinfo({ payload }, { call, put, select }) {
        //1.判断是否有权限信息
        let myView = yield select(state => state.user.myView);
        if (myView.length) {
            return
        }
        //2.获取用户信息
        let userInfo = yield call(getUserInfo);
        console.log('userInfo....', userInfo)
        yield put({
            type: 'updateUserInfo',
            payload: userInfo.data
        })
        //3.根据id获取视图权限
        let viewAuthority = yield call(getViewAuthority, userInfo.data.user_id);
        console.log('viewAuthority...', viewAuthority)
        yield put({
            type: 'updateViewAuthority',
            payload: viewAuthority.data
        })
    }
},

  // 同步操作
reducers: {
    updateLogin(state, { payload }) {
       return { ...state, isLogin: payload }
    },
    updateUserInfo(state, { payload }) {
       return { ...state, userInfo: payload }
    },
    updateViewAuthority(state, { payload }) {
      //筛选出我所有的前端路由权限
        let myView = allViews.routes,
        forbiddenView = [];
        myView.forEach(item => {
            item.children = item.children.filter(value => {
            if (payload.findIndex(id => id.view_id === value.id) !== -1) {
                return true;
            } else {
                forbiddenView.push(value.path);
                return false;
            }
            })
        })
        console.log('myview...', myView);
        return { ...state, viewAuthority: payload, myView, forbiddenView }
    }
  }
};
