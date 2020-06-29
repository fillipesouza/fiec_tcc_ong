import axios from 'axios'

const api = axios.create({
  baseURL: 'http://53.67.137.119:3333',
})

export default api