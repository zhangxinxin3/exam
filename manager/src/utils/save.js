import cookie from 'js-cookie'

export function getSave(key){
    return cookie.get(key)
}

export function setSave(key,value){
    console.log(value)
    cookie.set(key,value,{expires:7})
}
