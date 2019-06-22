import { grade, gradeDelete, gradeUpdata, roomAll, addGrade, getStudent, deleteStudent, getList, getDetail, addClassroom, deleteClassroom } from '@/services'
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
        room:[]
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
            yield put({
                type:"getStudents",
                payload:data.data
            })
        },
        *deleteStudent({ payload },{ call, put }){
            let data = yield call(deleteStudent,payload);
            console.log("删除学生",data)
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
            // yield put({
            //     type:"getStudents",
            //     payload:data.data
            // })
        },
        *addClassroom({ payload },{ call, put }){
            let data = yield call(addClassroom,payload);
            console.log("添加教室",data)
        },
        *deleteClassroom({ payload },{ call, put }){
            let data = yield call(deleteClassroom,payload);
            console.log("删除学生",data)
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
            state.types = [];
            state.types.push({
                key:payload.item.student_id,
                name:payload.item.student_name,
                studentID:payload.item.student_id,
                class:payload.item.grade_name,
                classroom:payload.item.room_text,
                password:payload.item.student_pwd,
                operation:payload.item.student_id
            })    
            return {...state}
        },
        geLists(state,{payload}){
            return {...state,children:payload,child:[]}
        }
    },

};
