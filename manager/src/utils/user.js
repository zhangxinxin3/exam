import Cookie from "js-cookie";
const key = "authorization";
//获取token
export function getToken() {
    return Cookie.get(key)
}
//设置token
export function setToken(val){
    Cookie.set(key,val,{expires:7})
}