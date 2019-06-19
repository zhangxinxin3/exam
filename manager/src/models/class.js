import { grade, gradeDelete, gradeUpdata, roomAll, addGrade, getStudent } from '@/services'
export default {
    // 命名空间
    namespace: 'class',

    // 模块内部的状态
    state: {
        gradeArr:[],
        datas:[],
        rooms:[],
        students:[]
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    // 异步操作
    effects: {
        *grade({ payload },{ call, put }){
            let data = yield call(grade);
            console.log("获取已经分配教室的班级",data)
            yield put({
                type:"grades",
                payload:data.data
            })
        },
        *gradeDelete({ payload },{ call, put }){
            let data = yield call(gradeDelete,payload);
            console.log("删除班级",data)
        },
        *gradeUpdata({ payload },{ call, put }){
            let data = yield call(gradeUpdata,payload);
            console.log("更新班级",data)
        },
        *roomAll({ payload },{ call, put }){
            let data = yield call(roomAll);
            console.log("获取全部教室",data)
            yield put({
                type:"roomAlls",
                payload:data.data
            })
        },
        *addGrade({ payload },{ call, put }){
            let data = yield call(addGrade,payload);
            console.log("添加班级",data)
        },
        *getStudent({ payload },{ call, put }){
            let data = yield call(getStudent);
            console.log("获取学生",data)
        }
    },

    // 同步操作
    reducers: {
        grades(state,{payload}){
            return {...state,gradeArr:payload,datas:[]}
        },
        roomAlls(state,{payload}){
            return {...state,rooms:payload}
        }
    },

};
