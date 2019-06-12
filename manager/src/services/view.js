import request from '../utils/request';

export function watch(){
  return request({
    url: '/exam/subject',
    method: 'GET'
  })
} 
export function examType(){
    return request({
      url: '/exam/examType',
      method: 'GET'
    })
} 
export function questionType(){
    return request({
        url: '/exam/insertQuestionsType',
        method: 'GET' 
    })
}