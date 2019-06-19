import { showUsers, showIdentity, showApiqx , showRelation , showView , showRelations } from "@/services";
export default {
    // 命名空间
    namespace: 'showtest',

    // 模块内部的状态
    state: {
        getUserArr: [],
        getIdentityArr: [],
        getApiqxArr: [],
        getRelationArr:[]
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    // 异步操作
    effects: {
        *showusers({ payload }, { call, put }) {
            var test = yield call(showUsers);
            yield put({
                type: "UserArr",
                payload: test.data
            })
            // console.log(test)
        },
        *showidentity({ payload }, { call, put }) {
            var test = yield call(showIdentity);
            yield put({
                type: "IdentityArr",
                payload: test.data
            })
        },
        *showapiqx({ payload }, { call, put }) {
            var test = yield call(showApiqx);
            yield put({
                type: "getApiqxArr",
                payload: test.data
            })
        },
        *showrelation({payload},{call,put}){
            var test = yield call(showRelation);
            yield put({
                type:"getRelationArr",
                payload:test.data
            })
        },
        *showview({payload},{call,put}){
            var test = yield call(showView);
            yield put({
                type:"getViewArr",
                payload:test.data
            })
        },
        *showrelations({payload},{call,put}){
            var test = yield call(showRelations);
            yield put({
                type:"getRelationArrs",
                payload:test.data
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
        UserArr(state, action) {
            return { ...state, getUserArr: action.payload }
        },
        IdentityArr(state, action) {
            return { ...state, getIdentityArr: action.payload }
        },
        getApiqxArr(state, action) {
            return { ...state, getApiqxArr: action.payload }
        },
        getRelationArr(state,action){
            return {...state , getRelationArr : action.payload}
        },
        getViewArr(state,action){
            return {...state , getViewArr : action.payload}
        },
        getRelationArrs(state,action){
            return {...state , getRelationArrs : action.payload}
        }
        // showtest(state,action){
        //     return {...state,...action.payload}
        // }
    },

};
