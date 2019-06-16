import request from '../utils/request';
export function showUsers(){
    return request({
        url:"/user/user",
        method: 'GET'
    })
}
export function showIdentity(){
    return request({
        url:"/user/identity",
        method:"GET"
    })
}
export function showApiqx(){
    return request({
        url:"/user/api_authority",
        method:"GET"
    })
}
export function showRelation(){
    return request({
        url:"/user/identity_api_authority_relation",
        method:"GET"
    })
}
export function showView(){
    return request({
        url:"/user/view_authority",
        method:"GET"
    })
}
export function showRelations(){
    return request({
        url:"/user/identity_view_authority_relation",
        method:"GET"
    })
}