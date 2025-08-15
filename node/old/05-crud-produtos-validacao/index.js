const express = require('express')
const app = express()

app.use(express.json())

console.log(process.env.TESTE)

const produtos = require('./routes/produtos')
app.use(produtos)

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})
