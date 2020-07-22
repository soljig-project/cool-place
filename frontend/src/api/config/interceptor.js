import axios from 'axios';

export function setInterceptors() {
  let instance = axios.create({
    baseURL: ''
  })
  instance.interceptors.request.use(
    config => {
      return config
    },
    error => Promise.reject(error.response)
  )
  instance.interceptors.response.use(
    config => config,
    error => Promise.reject(error.response)
  )
  return instance
}