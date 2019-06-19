import { examList } from '@/services'

export default {
    // 命名空间
    namespace: 'exam',

    // 模块内部的状态
    state: {
        examArr:[]
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    // 异步操作
    effects: {
        //获取试卷列表
        *examList({ payload }, { call, put }){
            let data = yield call(examList,payload);
            console.log('获取试卷列表',data)
            yield put({
                type:"getexamList",
                payload:data.exam
            })
        }
    },

    // 同步操作
    reducers: {
        getexamList(state,{ payload }){
            console.log(payload)
            return { ...state, examArr:payload }
        }
    },

};
