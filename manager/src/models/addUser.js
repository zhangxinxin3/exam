import { ident, viewAuthority, apiAuthority, userId, addUser, addIdent, addAuthorityApi, addAuthorityView, setIdentityApi, setIdentityView, upIdent } from '@/services'

export default {
    // 命名空间
    namespace: 'addUser',

    // 模块内部的状态
    state: {
        identArr:[], //获取身份id
        viewArr:[], //获取已有视图
        apiArr:[], //获取api接口权限数据,
        userArr:[] //获取用户id
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
            // console.log("获取身份id",data)
            yield put({
                type:"idents",
                payload:data.data
            })
        },
        //获取已有视图
        *viewAuthority({ payload }, { call, put }){
            let data = yield call(viewAuthority);
            // console.log("获取已有视图",data);
            yield put({
                type:"viewAuthoritys",
                payload:data.data
            })
        },
        //获取api接口权限数据
        *apiAuthority({ payload }, { call, put }){
            let data = yield call(apiAuthority);
            // console.log("获取api接口权限数据",data);
            yield put({
                type:"apiAuthoritys",
                payload:data.data
            })
        },
        //获取用户id
        *getUser({ payload }, { call, put }){
            let data = yield call(userId);
            // console.log("获取用户id",data);
            yield put({
                type:"getUsers",
                payload:data.data
            })
        },
        //添加用户
        *addUser({ payload }, { call, put }){
            let data = yield call(addUser, payload);
            // console.log("添加用户",data);
        },
        *upIdent({ payload }, { call, put }){
            let data = yield call(upIdent, payload);
            // console.log("更新用户",data);
        },
        //添加身份
        *addIdent({ payload }, { call, put }){
            let data = yield call(addIdent, payload);
            // console.log("添加身份",data);
        },
        //添加api接口权限
        *addAuthorityApi({ payload }, { call, put }){
            let data = yield call(addAuthorityApi, payload);
            // console.log("添加api接口权限",data);
        },
        //添加视图权限
        *addAuthorityView({ payload }, { call, put }){
            let data = yield call(addAuthorityView, payload);
            // console.log("添加视图权限",data);
        },
        //给身份设置api接口权限
        *setIdentityApi({ payload }, { call, put }){
            let data = yield call(setIdentityApi, payload);
            // console.log("给身份设置api接口权限",data);
        },
        //给身份设置视图权限
        *setIdentityView({ payload }, { call, put }){
            let data = yield call(setIdentityView, payload);
            // console.log("给身份设置视图权限",data);
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
        },
        getUsers(state,{payload}){
            return { ...state, userArr:payload }
        }
    },

};
