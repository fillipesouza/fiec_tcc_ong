import axios from 'axios'

const api = axios.create({
  baseURL: 'http://54.233.179.164:3333',
})

export default api