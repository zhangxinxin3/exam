import { getAllClass, getAllType } from "@/services"

export default {
    // 命名空间
    namespace: 'addExam',

    // 模块内部的状态
    state: {
        getAllClassArr: [],
        getAllTypeArr: []
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    // 异步操作
    effects: {
        *getallclass({ payload }, { call, put }) {
            let test = yield call(getAllClass);
            yield put({
                type: "getAllClassArr",
                payload: test.data
            })
        },
        *getalltype({ payload }, { call, put }) {
            let test = yield call(getAllType);
            yield put({
                type: "getAllTypeArr",
                payload: test.data
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
        getAllClassArr(state, action) {
            return { ...state, getAllClassArr: action.payload }
        },
        getAllTypeArr(state, action) {
            return { ...state, getAllTypeArr: action.payload }
        }
    },

};
