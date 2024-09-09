import config from '@/config'
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
}

export const api = axios.create({
  baseURL: `${config.apiURL}`,
})

export default new Service()
