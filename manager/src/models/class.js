import { grade, gradeDelete, gradeUpdata, roomAll, addGrade, getStudent, deleteStudent, getList, getDetail, addClassroom, deleteClassroom } from '@/services'
import { getSave,setSave } from '../utils/save';

export default {
    // 命名空间
    namespace: 'class',

    // 模块内部的状态
    state: {
        gradeArr:[],
        datas:[],
        rooms:[],
        students:[],
        types:[],
        data:[],
        children:[],
        child:[],
        room:[],
        detail:{},
        remove:0,
        saves:{},
        gradeGood:0,
        changeGood:0,
        removeClassroom:0,
        classroomGood:0,
        studentGood:0
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
            yield put({
                type: 'removesucc',
                payload: data.code === 1 ? 1 : -1
            })
        },
        *gradeUpdata({ payload },{ call, put }){
            let data = yield call(gradeUpdata,payload);
            console.log("更新班级",data)
            yield put({
                type:"gradeUpdatas",
                payload:data.code ? 1 : -1
            })
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
            console.log("添加班级",data);
            yield put({
                type:"addGrades",
                payload:data.code ? 1 : -1
            })
        },
        *getStudent({ payload },{ call, put }){
            let data = yield call(getStudent);
            console.log("获取学生",data)
            yield put({
                type:"getStudents",
                payload:data.data
            })
        },
        *deleteStudent({ payload },{ call, put }){
            let data = yield call(deleteStudent,payload);
            console.log("删除学生",data)
            yield put({
                type:"deleteStudents",
                payload:data.code === 1 ? 1 : -1
            })
        },
        *getList({ payload },{ call, put }){
            let data = yield call(getList,payload);
            console.log("获取试卷学生列表",data)
            yield put({
                type:"geLists",
                payload:data.exam
            })
        },
        *getDetail({ payload },{ call, put }){
            let data = yield call(getDetail,payload);
            console.log("获取试卷学生详情",data)
            yield put({
                type:"getDetails",
                payload:data.data
            })
        },
        *addClassroom({ payload },{ call, put }){
            let data = yield call(addClassroom,payload);
            console.log("添加教室",data)
            yield put({
                type:"addClassrooms",
                payload:data.code ? 1 : -1
            })
        },
        *deleteClassroom({ payload },{ call, put }){
            let data = yield call(deleteClassroom,payload);
            console.log("删除教室",data)
            yield put({
                type:"deleteClassrooms",
                payload:data.code ? 1 : -1
            })
        },
        *save({ payload },{ call, put }){
            console.log(payload)
            setSave('save',JSON.stringify(payload))
        },
        *getSaves({ payload },{ call, put }){
            let datas = getSave('save');
            let id = JSON.parse(datas).id;
            let data = yield call(getList,{
                grade_id:id
            });
            console.log("获取试卷学生列表",data)
            yield put({
                type:"geLists",
                payload:{
                    data:data.exam,
                    name:JSON.parse(datas).name
                }
            })
        }
    },

    // 同步操作
    reducers: {
        grades(state,{payload}){
            return {...state,gradeArr:payload,datas:[]}
        },
        roomAlls(state,{payload}){
            return {...state,rooms:payload}
        },
        getStudents(state,{payload}){
            return {...state,students:payload,types:[],data:[]}
        },
        changeTypes(state,{payload}){
            console.log(payload.arr)
            return {...state,students:payload.arr}
        },
        geLists(state,{payload}){
            return {...state,children:payload.data,name:payload.name,child:[]}
        },
        getDetails(state,{payload}){
            return {...state,detail:payload}
        },
        changeScore(state,{payload}){
            return {...state,detail:{...state.detail,score:payload.e}}
        },
        removesucc(state,{payload}){
            return {...state,remove:payload}
        },
        addGrades(state,{payload}){
            return {...state,gradeGood:payload}
        },
        gradeUpdatas(state,{payload}){
            return {...state,changeGood:payload}
        },
        deleteClassrooms(state,{payload}){
            return {...state,removeClassroom:payload}
        },
        addClassrooms(state,{payload}){
            return {...state,classroomGood:payload}
        },
        deleteStudents(state,{payload}){
            return {...state,studentGood:payload}
        }
    },

};
