import { Addtest, testType, allSubject, allType, getAllTest, getUser } from "@/services";

export default {
    // 命名空间
    namespace: 'addtest',

    // 模块内部的状态
    state: {
        dataArr: [],
        subArr: [],
        typeArr: [],
        allTest: [],
        userData:{}
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    // 异步操作
    effects: {
        *addtest({ payload }, { call, put }) {
            // let test = yield call(Addtest, payload);
        },
        *testtype({ payload }, { call, put }) {
            let type = yield call(testType);
            yield put({
                type: "dataArrs",
                payload: type.data
            })
        },
        *allsubject({ payload }, { call, put }) {
            let all = yield call(allSubject);
            yield put({
                type: "subArrs",
                payload: all.data
            })
        },
        *alltype({ payload }, { call, put }) {
            let alltypes = yield call(allType);
            yield put({
                type: "typeArrs",
                payload: alltypes.data
            })
        },
        *getalltest({ payload }, { call, put }) {
            let alltests = yield call(getAllTest);
            yield put({
                type: "allTests",
                payload: alltests.data
            })
        },
        *getUser({ payload }, { call, put }){
            let data = yield call(getUser);
            yield put({
                type: "getUsers",
                payload: data.data
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
        dataArrs(state, action) {
            return { ...state, dataArr: action.payload }
        },
        subArrs(state, action) {
            return { ...state, subArr: action.payload }
        },
        typeArrs(state, action) {
            return { ...state, typeArr: action.payload }
        },
        allTests(state, action) {
            return { ...state, allTest: action.payload }
        },
        getUsers(state,action){
            // console.log(action.payload)
            return {...state, userData:action.payload }
        }
    },

};
