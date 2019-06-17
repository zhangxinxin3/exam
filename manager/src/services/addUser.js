import request from '../utils/request';

//获取身份id
export function ident(){
    return request({
        url:"/user/identity",
        method:"GET"
    })
}

//获取已有视图
export function viewAuthority(){
    return request({
        url:"/user/view_authority",
        method:"GET"
    })
}

//获取api接口权限数据
export function apiAuthority(){
    return request({
        url:"/user/api_authority",
        method:"GET"
    })
}

//获取用户id
export function userId(){
    return request({
        url:"/user/user",
        method:"GET"
    })
}

//添加用户
export function addUser(params){
    return request({
        url:"/user",
        method:"POST",
        data:params
    })
}

//添加身份
export function addIdent(params){
    return request({
        url:"/user/identity/edit?identity_text="+params.identity_text,
        method:"GET"
    })
}

//更新用户
export function upIdent(params){
    return request({
        url:"/user/user",
        method:"PUT",
        data:params
    })
}

//添加api接口权限
export function addAuthorityApi(params){
    console.log(params)
    return request({
        url:"/user/authorityApi/edit?api_authority_text="+params.api_authority_text+"&api_authority_url="+params.api_authority_url+"&api_authority_method="+params.api_authority_method,
        method:"GET"
    })
}

//添加视图权限
export function addAuthorityView(params){
    return request({
        url:"/user/authorityView/edit?view_authority_text="+params.view_authority_text+"&view_id="+params.view_id,
        method:"GET"
    })
}

//给身份设置api接口权限
export function setIdentityApi(params){
    return request({
        url:"/user/setIdentityApi",
        method:"POST",
        data:params
    })
}

//给身份设置视图权限
export function setIdentityView(params){
    return request({
        url:"/user/setIdentityView",
        method:"POST",
        data:params
    })
}