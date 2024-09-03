import axios from 'axios';

const apiLoja =axios.create({
  baseURL: 'https://dummyjson.com'
})

export default apiLoja
