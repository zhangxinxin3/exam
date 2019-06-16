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