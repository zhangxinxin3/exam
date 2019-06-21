import request from "../utils/request";
//获取课程
export function getAllClass(){
    return request({
        url:"/exam/subject",
        method:"GET"
    })
}
//获取考试类型
export function getAllType(){
    return request({
        url:"/exam/examType",
        method:"GET"
    })
}
//请求创建试卷
export function getCreateTest(){
    return request({
        url:"/exam/exam",
        method:"GET"
    })
}