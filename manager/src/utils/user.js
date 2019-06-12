import cookie from 'js-cookie'
let key = 'addUser'

export function getToken(){
    return cookie.get(key)
}

export function setToken(value){
    cookie.set(key,value,{expires:7})
}