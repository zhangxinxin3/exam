import request from "../utils/request";
export function createTest(params){
    return request({
        url:"exam/exam",
        method:"POST",
        data:params
    })
}
export function getTest(){
    return request({
        url:"/exam/questions/new",
        method:"GET"
    })
}