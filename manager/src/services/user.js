import request from '../utils/request';

// 登陆接口
export function login(params){
  return request({
    url: '/user/login',
    method: 'POST',
    data: params
  })
} 

//获取用户信息
export function getUserInfo(){
  return request({
    url:'/user/userInfo',
    method:'GET'
  })
}
//获取用户权限
export function getViewAuthority(user_id){
  return request({
    url:'/user/new?user_id='+user_id
  })
}