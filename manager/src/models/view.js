import { watch, examType, questionType, getAll, condition, questionUp ,addQuestionType } from '@/services'
import { setSave, getSave } from '../utils/save'


export default {
    // 命名空间
    namespace: 'view',

    // 模块内部的状态
    state: {
        data:[],
        examArr:[],
        questionArr:[],
        allArr:[],
        types:[],
        typeGood:0,
        detail:{}
    },

    // 订阅路由跳转
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        }
    },

    // 异步操作
    effects: {
        //获取所有的课程
        *watch({payload},{call, put}){
            // let login = getToken();
            let data = yield call(watch);
            console.log('获取所有的课程',data)
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
        //获取所有的试题类型
        *questionType({payload},{call,put}){
            let data = yield call(questionType);
            console.log('获取所有的试题类型',data)
            yield put({
                type:'getquestionType',
                payload:data.data
            })
        },
        *addQuestionType({payload},{call,put}){
            let data = yield call(addQuestionType,payload);
            console.log("添加试题类型",data)
            yield put({
                type:'addQuestionTypes',
                payload:data.code === 1 ? 1 : -1
            })
        },
        *getAll({payload},{call,put}){
            let data = yield call(getAll);
            // console.log(data)
            yield put({
                type:'getAlls',
                payload:data.data
            })
        },
        *condition({payload},{call,put}){
            let data = yield call(condition,payload)
            yield put({
                type:'getCondition',
                payload:data.data
            })
        },
        *questionUp({payload},{call,put}){
            let data = yield call(questionUp,payload)
            // console.log(data)
        },
        *saveItems({payload},{call,put}){
            setSave('itemId',JSON.stringify(payload))
        },
        *getItem({payload},{call,put}){
            let datas = getSave('itemId')
            let id = JSON.parse(datas).id;
            let data = yield call(condition,{
                questions_id:id
            })
            console.log('获取编辑页数据',data)
            yield put({
                type:'getConditions',
                payload:{
                    data:data.data,
                    id:id
                }
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
        },
        getAlls(state,{payload}){
            return {...state,allArr:payload}
        },
        getCondition(state,{payload}){
            return {...state,allArr:payload}
        },
        getConditions(state,{payload}){
            return {...state,allArr:payload.data,id:payload.id}
        },
        addQuestionTypes(state,{payload}){
            return {...state,typeGood:payload}
        }
    }
};
