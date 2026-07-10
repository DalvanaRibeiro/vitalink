import axios from 'axios'
import * as SecureStore from 'expo-secure-store'

export const api = axios.create({
  baseURL: 'http://172.20.90.169:3333'
})

api.interceptors.request.use(async config => {
  const token = await SecureStore.getItemAsync('vitalink_token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})