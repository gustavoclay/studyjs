const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Olá!')
})

app.get('/produtos', (req, res) => {
  res.send({ nome: 'Notebook', preco: 123.45 })
})

app.get('/ola/:nome', (req, res) => {
  console.log(req.params)
  res.send(`Olá ${req.params.nome}, seja bem-bindo ao meu backend!`)
})

app.get('/ola', (req, res) => {
  console.log(req.query)
  res.send(`Olá ${req.query.nome}, tudo bem?`)
})

app.get('/testando', (req, res) => {
  res.send(req.query)
})

app.get('/teste', (req, res) => {
  const contatos = [{
    nome: "Gustavo",
    email: "gustavo@ig.com.br"
  },
  {
    nome: "Paulo",
    email: "paulo@ig.com.br"
  },
  {
    nome: "Joaquim",
    email: "joaquim@ig.com.br"
  }]
  res.send(contatos)
})

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`)
})
