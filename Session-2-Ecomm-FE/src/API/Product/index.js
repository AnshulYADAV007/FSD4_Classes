import { AxiosInstance } from '../../util/AxiosInstance'

export const getAllProducts = async () => {
  const URI = '/ecomm/api/v1/products'

  try {
    const products = await AxiosInstance.get(URI)
    return products
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getProductsForCategory = async (categoryId) => {
  const URI = `/ecomm/api/v1/categories/${categoryId}/products`

  try {
    const response = await AxiosInstance.get(URI)
    console.log(response)
    return response
  } catch (error) {
    return error
  }
}

export const search = async (searchTerm) => {
  const URI = '/ecomm/api/v1/products'

  try {
    const response = await AxiosInstance.get(URI, { params: searchTerm })
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
