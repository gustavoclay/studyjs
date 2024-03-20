console.log("Iniciando API")

const http = require('http')

let contador = 0

http.createServer((req, res) => {
  res.write('Sou um servidor node e recebi uma requisição, este texto é a resposta')
  contador++
  console.log("Contador de Requisições: " + contador)
  res.end()
}).listen(3000)


