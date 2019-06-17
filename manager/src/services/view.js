import request from '../utils/request';

//获取所有的课程
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

//获取所有的试题类型
export function questionType(){
    return request({
        url: '/exam/getQuestionsType',
        method: 'GET' 
    })
}

export function addQuestionType(params){
    return request({
        url: '/exam/insertQuestionsType?text='+params.text+'&sort='+params.sort,
        method: 'GET' 
    })
}


export function getAll(){
    return request({
        url: '/exam/questions/new',
        method: 'GET' 
    })
}

export function condition(params){
    if(params.subject_id){
        if(params.exam_id){
            return request({
                url:'/exam/questions/condition?subject_id='+params.subject_id+'&exam_id='+params.exam_id,
                method:'GET'
            })
        }else if(params.questions_type_id){
            return request({
                url:'/exam/questions/condition?subject_id='+params.subject_id+'&questions_type_id='+params.questions_type_id,
                method:'GET'
            })
        }else{
            return request({
                url:'/exam/questions/condition?subject_id='+params.subject_id,
                method:'GET'
            })    
        }
        
    }else if(params.exam_id){
        if(params.questions_type_id){
            return request({
                url:'/exam/questions/condition?exam_id='+params.exam_id+'&questions_type_id='+params.questions_type_id,
                method:'GET'
            })
        }else{
            return request({
                url:'/exam/questions/condition?exam_id='+params.exam_id,
                method:'GET'
            })
        }
    }else if(params.questions_type_id){
        return request({
            url:'/exam/questions/condition?questions_type_id='+params.questions_type_id,
            method:'GET'
        })
    }
    if(params.subject_id &&params.exam_id &&params.questions_type_id){
        return request({
            url:'/exam/questions/condition?subject_id='+params.subject_id+'&exam_id='+params.exam_id+'&questions_type_id='+params.questions_type_id,
            method:'GET'
        })
    }
    if(params.questions_id){
        return request({
            url:'/exam/questions/condition?questions_id='+params.questions_id,
            method:'GET'
        })
    }
}

export function questionUp(params){
    return request({
        url: '/exam/questions/update',
        method: 'PUT' ,
        data:params
    })
}