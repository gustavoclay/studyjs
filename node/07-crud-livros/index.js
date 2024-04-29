const express = require('express')
const app = express()

app.use(express.json())

console.log(process.env.TESTE)

const livros = require('./routes/livros')
app.use(livros)

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})

module.exports = app
