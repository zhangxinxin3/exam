import cookie from 'js-cookie'
let key = 'addUser'
//获取登录态
export function getToken(){
    return cookie.get(key)
}
//设置登录态
export function setToken(value){
    cookie.set(key,value,{expires:7})
}

//删除登录态
export function removeToken(){
    cookie.remove(key)
}