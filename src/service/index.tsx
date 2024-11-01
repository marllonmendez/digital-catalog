import axios from 'axios'

class Service {
  async PostProduct(formData: FormData) {
    return await api.post('/product', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  }

  async GetProducts() {
    return await api.get('/products')
  }

  async GetProductById(slug: string) {
    return await api.get(`/product/${slug}`)
  }

  async PutProduct(slug: string, productData: { name: string, price: number }) {
    return await api.put(`/product/${slug}`, productData)
  }

  async DeleteProduct(slug: string) {
    return await api.delete(`/product/${slug}`)
  }
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export default new Service()
