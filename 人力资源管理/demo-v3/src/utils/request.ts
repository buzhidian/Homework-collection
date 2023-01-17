import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getToken } from '@/utils/auth'
const http = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json;charset=uft-8' }
})
http.interceptors.request.use(
  (config) => {
    const token = getToken()
    config.headers = {
      Authorization: `Bearer ${token}`
      // Cookie: `JSESSIONID=496f9d0f-0a78-4931-87c5-1e0b6cc748e9`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
http.interceptors.response.use(
  (response) => {
    const res = response.data
    if (response.status != 200) {
      ElMessage({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return response
    }
  },
  (error) => {
    console.log('error' + error)

    return Promise.reject(error)
  }
)
export default http
