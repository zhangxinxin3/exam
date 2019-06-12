import { watch,examType,questionType } from '@/services'

export default {
  // 命名空间
  namespace: 'view',

  // 模块内部的状态
  state: {
     data:[],
     examArr:[],
     questionArr:[]
  },

  // 订阅路由跳转
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    }
  },

  // 异步操作
  effects: {
    *watch({payload},{call, put}){
        // let login = getToken();
      let data = yield call(watch);
        yield put({
            type:'getLess',
            payload:data.data
        })
    },
    *examType({payload},{call, put}){
      let data = yield call(examType);
        yield put({
            type:'getexamType',
            payload:data.data
        })
    },
    *questionType({payload},{call,put}){
        let data = yield call(questionType);
        yield put({
            type:'getquestionType',
            payload:data.data
        })
    }
  },

  // 同步操作
  reducers: {
      getLess(state,{payload}){
          return {...state,data:payload}
      },
      getexamType(state,{payload}){
          return {...state,examArr:payload}
      },
      getquestionType(state,{payload}){
          return {...state,questionArr:payload}
      }
  }
};
