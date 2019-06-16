import { ident, viewAuthority, apiAuthority } from '@/services'

export default {
    // 命名空间
    namespace: 'addUser',

    // 模块内部的状态
    state: {
        identArr:[], //获取身份id
        viewArr:[], //获取已有视图
        apiArr:[]  //获取api接口权限数据
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    // 异步操作
    effects: {
        //获取身份id
        *ident({ payload }, { call, put }){
            let data = yield call(ident);
            console.log("获取身份id",data)
            yield put({
                type:"idents",
                payload:data.data
            })
        },
        //获取已有视图
        *viewAuthority({ payload }, { call, put }){
            let data = yield call(viewAuthority);
            console.log("获取已有视图",data);
            yield put({
                type:"viewAuthoritys",
                payload:data.data
            })
        },
        //获取api接口权限数据
        *apiAuthority({ payload }, { call, put }){
            let data = yield call(apiAuthority);
            console.log("获取api接口权限数据",data);
            yield put({
                type:"apiAuthoritys",
                payload:data.data
            })
        }
    },

    // 同步操作
    reducers: {
        //返回身份数据
        idents(state,{payload}){
            return { ...state, identArr:payload }
        },
        viewAuthoritys(state,{payload}){
            return { ...state, viewArr:payload }
        },
        apiAuthoritys(state,{payload}){
            return { ...state, apiArr:payload }
        }
    },

};
