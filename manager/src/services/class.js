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

//获取所有已经分班的学生的接口
export function getStudent(){
    return request({
        url:'/manger/student',
        method:"GET"
    })
}