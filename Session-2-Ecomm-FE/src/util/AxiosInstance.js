import axios from 'axios'
import { TIMEOUT, URL } from '../Config/app.config'

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'

export const AxiosInstance = axios.create({
  baseURL: URL,
  timeout: TIMEOUT,
})
