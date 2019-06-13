import request from '../utils/request';

//添加试题接口
export function Addtest(params){

    return request({
      url: '/exam/questions',
      method: 'POST',
      data: params
    })
  } 
  
  //获取所有考试类型
export function testType(){
  return request({
    url:'/exam/examType',
    method:'GET'
  })
}


//获取所有课程
export function allSubject(){
  return request({
    url:"/exam/subject",
    method:"GET"
  })
}

//获取所有试题类型
export function allType(){
  return request({
    url:"/exam/getQuestionsType",
    method:"GET"
  })
}