import { login } from '../services'
import { setToken,getToken } from '../utils/user'
import {routerRedux} from 'dva/router'

export default {
    // 命名空间
    namespace: 'user',

    // 模块内部的状态
    state: {
        isLogin: 0
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            return history.listen(({ pathname }) => {
                if (pathname.indexOf('/') === -1) {
                  // 做token检测
                    if (!getToken()){
                        // 利用redux做路由跳转
                        dispatch(routerRedux.replace({
                        pathname: `/?redirect=${encodeURIComponent(pathname)}`,
                        }))
                    }
                }else{
                    if (getToken()){
                        // 利用redux做路由跳转
                        dispatch(routerRedux.replace({
                        pathname: '/main',
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
            if(data.code===1){
                setToken(data.token)
            }
            yield put({
                type:'upLogin',
                isLogin:data.code === 1 ? 1 :-1
            })
        },
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
    },

    // 同步操作
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
        upLogin(state,{isLogin}){
            console.log(isLogin)
            return {...state,isLogin}
        }
    },

};
