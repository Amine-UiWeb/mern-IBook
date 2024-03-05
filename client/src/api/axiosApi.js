import axios from "axios"

const baseApi = axios.create({ baseURL: 'http://localhost:5000' })
baseApi.defaults.withCredentials = true


// todo: set interceptors for the apiWithInterceptors
// request interceptor: set auth header
// response interceptor: refresh the aT uppon expiring, then retry the request 
// const apiWithInterceptors = axios.interceptors


export const registerUser = async (newUser) => {
  try {
    const res = await baseApi.post('/auth/register', newUser, {
      headers: { 'Content-Type': 'application/json' }
    })
    return res.data
  }
  catch (err) { return err }
}


export const loginUser = async (credentials) => {
  try {
    const res = await baseApi.post('/auth/login', credentials, {
      headers: { 'Content-Type': 'application/json' },
    })
    return res.data
  } 
  catch (err) { return err }
}


export const refreshToken = async () => {
  try {
    const res = await baseApi.get('/auth/refresh', {
      headers: { 'Content-Type': 'application/json' },
    })
    return res.data
  } 
  catch (err) { return err }
}


export const logoutUser = async () => {
  try {
    const res = await baseApi.post('/auth/logout')
    return res.data
  } 
  catch (err) { return err }
}