import axios from 'axios';

export const apiFutebol = axios.create({
  baseURL: 'https://my-json-server.typicode.com/gustavoclay/sport'
})

export default apiFutebol
