import request from "../utils/request";
export function createTest(params){
    return request({
        url:"exam/exam",
        method:"POST",
        data:params
    })
}