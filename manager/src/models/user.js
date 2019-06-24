import { login } from '@/services'
import { setToken, getToken } from '@/utils/user'
import { routerRedux } from 'dva/router';

export default {
  // 命名空间
  namespace: 'user',

  // 模块内部的状态
  state: {
    isLogin: 0
  },

  // 订阅路由跳转
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => {
        // console.log(pathname)
        if (pathname.indexOf('/login') === -1) {
          if (!getToken()) {
            dispatch(routerRedux.replace({
              pathname: `/login`,
              search:`?redirect=${encodeURIComponent(pathname)}`
            }))
          }
        } else {
          if (getToken()) {
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
      let data = yield call(login, payload);
      if (data.code === 1) {
        setToken(data.token);
      }
      yield put({
        type: 'updateLogin',
        payload: data.code === 1 ? 1 : -1
      })
    }
  },

  // 同步操作
  reducers: {
    updateLogin(state, { payload }) {
      return { ...state, isLogin: payload }
    }
    //退出登录

  }
};
