import { AxiosInstance } from '../../util/AxiosInstance'

export const signin = async (user) => {
  const URL = '/ecomm/api/v1/auth/signin'

  try {
    const response = await AxiosInstance.post(URL, user)
    console.log(response)
    const { userName, id, accessToken } = response.data

    localStorage.setItem('username', userName)
    localStorage.setItem('userId', id)
    localStorage.setItem('token', accessToken)
    console.log(localStorage)
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const signup = async (user) => {
  const URL = '/ecomm/api/v1/auth/signup'

  try {
    const response = await AxiosInstance.post(URL, user)
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const signout = () => {
  localStorage.removeItem('userName')
  localStorage.removeItem('userId')
  localStorage.removeItem('token')
  localStorage.removeItem('cartId')
}
