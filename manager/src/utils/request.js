<<<<<<< HEAD
import axios from "axios";
const service = axios.create({
  baseURL:"http://127.0.0.1:7001/",
  timeout:5000
})
=======
import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: 'http://169.254.12.250:7001/',
  // withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})

// request interceptor
>>>>>>> 53142d4a05fadc355d96f777516b5973cfcc2327
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
<<<<<<< HEAD
=======

// response interceptor
>>>>>>> 53142d4a05fadc355d96f777516b5973cfcc2327
service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error)
  }
)
<<<<<<< HEAD
export default service
=======

export default service
>>>>>>> 53142d4a05fadc355d96f777516b5973cfcc2327
