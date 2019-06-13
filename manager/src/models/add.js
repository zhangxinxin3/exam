import { Addtest, testType, allSubject, allType } from "@/services";

export default {
    // 命名空间
    namespace: 'addtest',

    // 模块内部的状态
    state: {
        dataArr: [],
        subArr: [],
        typeArr: []
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    // 异步操作
    effects: {
        *addtest({ payload }, { call, put }) {
            let test = yield call(Addtest, payload);
            console.log(test)
        },
        *testtype({ payload }, { call, put }) {
            let type = yield call(testType);
            console.log(type)
            yield put({
                type: "dataArrs",
                payload: type.data
            })
        },
        *allsubject({ payload }, { call, put }) {
            let all = yield call(allSubject);
            console.log(all)
            yield put({
                type: "subArrs",
                payload: all.data
            })
        },
        *alltype({ payload }, { call, put }) {
            let alltypes = yield call(allType);
            console.log(alltypes)
            // yield put({
            //     type: "typeArrs",
            //     payload: alltypes.data
            // })
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
        dataArrs(state, action) {
            console.log(action.payload)
            return { ...state, dataArr: action.payload }
        },
        subArrs(state, action) {
            console.log(action.payload)
            return { ...state, subArr: action.payload }
        },
        typeArrs(state, action) {
            console.log(action.payload)
            return { ...state, typeArr: action.payload }
        }
    },

};
