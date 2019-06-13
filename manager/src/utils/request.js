import axios from 'axios'
import {getToken} from '@/utils/user'

const service = axios.create({
  baseURL: 'http://169.254.12.250:7001/',
  timeout: 1000
})

service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['addUser'] = getToken()
      config.headers.Authorization = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error)
  }
)

export default service
