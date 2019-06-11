import request from '../utils/request';

// 登陆接口
export function login(params){
    return request({
        url: '/user/login',
        method: 'POST',
        data: params
    })
}
