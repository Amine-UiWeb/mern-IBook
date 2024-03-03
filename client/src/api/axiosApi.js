import axios from "axios"

const baseApi = axios.create({ baseURL: 'http://localhost:5000' })


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


export const refreshToken = async (credentials) => {
  try {
    const res = await baseApi.get('/auth/refresh', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: "true"
    })
    const result = await res.json()
    return result
  } 
  catch (err) { return err }
}


export const logoutUser = async () => {
  try {
    const res = await fetch('http://localhost:5000/auth/logout')
    const result = await res.json()
    return result
  } 
  catch (err) { return err }
}