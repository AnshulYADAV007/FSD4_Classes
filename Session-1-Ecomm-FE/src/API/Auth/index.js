import axios from 'axios'
import { URL } from '../../Config/app.config'

export const signin = async (user) => {
  let url = URL + '/ecomm/api/v1/auth/signin'
  let response = await axios.post(url, user)
  return response
}

export const signup = async (user) => {
  let url = URL + '/ecomm/api/v1/auth/signup'
  let response = await axios.post(url, user)
  return response
}
