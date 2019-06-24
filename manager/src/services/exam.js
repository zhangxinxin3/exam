import request from '../utils/request';

//获取试卷列表
export function examList(parmas){
    console.log(parmas)
    if(parmas){
        return request({
            url:"/exam/exam?subject_id="+parmas.subject_id,
            method:"GET"
        })    
    }else{
        return request({
            url:"/exam/exam",
            method:"GET"
        })
    }
}
