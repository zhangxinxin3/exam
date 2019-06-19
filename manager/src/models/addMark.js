import { createTest , getTest} from "@/services";
export default {
    // 命名空间
    namespace: 'addMark',

    // 模块内部的状态
    state: {
        getArr:[]
    },

    subscriptions: {
        setup({ dispatch, history }) {
              // eslint-disable-line
            //   console.log(dispatch,history)
        },
    },

    // 异步操作
    effects: {
        *createtest({payload},{call,put}){
            let test = yield call(createTest,payload);
            console.log(test)
        },
        *gettest({payload},{call,put}){
            let test = yield call(getTest,payload);
            console.log(test)
            yield put({
                type:"getArrs",
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
        getArrs(state,action){
            return {...state ,getArr:action.payload}
        }
    },

};
