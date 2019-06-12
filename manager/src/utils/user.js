import Cookie from 'js-cookie';

const key = 'addUser';

export function getToken(){
  return Cookie.get(key)
}

export function setToken(value){
  Cookie.set(key, value, {expires: 7})
}
