import request from "../utils/request";
export function createTest(params){
    return request({
        url:"exam/exam",
        method:"POST",
        data:params
    })
}
export function getTest(params){
    return request({
        url:"exam/exam",
        method:"GET",
        data:params
    })
}