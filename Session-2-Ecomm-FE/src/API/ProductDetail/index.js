import { AxiosInstance } from '../../util/AxiosInstance'

export const getProduct = async (id) => {
  const URI = `/ecomm/api/v1/products/${id}`

  try {
    const product = await AxiosInstance.get(URI)
    console.log(product)
    return product
  } catch (error) {
    throw error
  }
}
