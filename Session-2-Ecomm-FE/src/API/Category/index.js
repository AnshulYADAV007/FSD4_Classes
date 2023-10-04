import { AxiosInstance } from '../../util/AxiosInstance'

export const getAllCategories = async () => {
  const URI = '/ecomm/api/v1/category'

  try {
    const response = await AxiosInstance.get(URI)
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}
