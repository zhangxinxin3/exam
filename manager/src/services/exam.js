import request from '../utils/request';

//获取试卷列表
export function examList(){
    return request({
        url:"/exam/exam",
        method:"GET"
    })
}
