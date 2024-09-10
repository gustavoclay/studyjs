import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY
console.log("🚀 ~ apiKey:", apiKey)

const apiFilmes = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: 'Bearer ' + apiKey
  }
})

export default apiFilmes
