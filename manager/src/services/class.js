import request from '../utils/request';

//获取已经分配教室的班级
export function grade(){
    return request({
        url:'/manger/grade',
        method:"GET"
    })
}

//添加班级
export function addGrade(params){
    return request({
        url:'/manger/grade',
        method:"POST",
        data:params
    })
}

//删除班级
export function gradeDelete(params){
    return request({
        url:'/manger/grade/delete',
        method:"DELETE",
        data:params
    })
}

//更新班级
export function gradeUpdata(params){
    return request({
        url:'/manger/grade/update',
        method:"PUT",
        data:params
    })
}

//获取全部教室
export function roomAll(){
    return request({
        url:'/manger/room',
        method:"GET"
    })
}

//添加教室
export function addClassroom(params){
    return request({
        url:'/manger/room',
        method:"POST",
        data:params
    })
}

//删除教室
export function deleteClassroom(params){
    return request({
        url:'/manger/room/delete',
        method:"DELETE",
        data:params
    })
}

//获取所有已经分班的学生的接口
export function getStudent(){
    return request({
        url:'/manger/student',
        method:"GET"
    })
}

//获取学生试卷列表
export function getList(params){
    return request({
        url:'/exam/student?grade_id='+params.grade_id,
        method:"GET"
    })
}

//获取学生试卷详情
export function getDetail(params){
    return request({
        url:'/exam/student/'+params.id,
        method:"GET"
    })
}

//删除学生
export function deleteStudent(params){
    console.log(params)
    return request({
        url:'/manger/student/'+params.student_id,
        method:"DELETE"
    })
}