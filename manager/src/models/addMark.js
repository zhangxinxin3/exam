import { createTest } from "@/services";
export default {
    // 命名空间
    namespace: 'addMark',

    // 模块内部的状态
    state: {},

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    // 异步操作
    effects: {
        *createtest({payload},{call,put}){
            let test = yield call(createTest);
            console.log(test)
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
    },

};
