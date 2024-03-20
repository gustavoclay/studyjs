const express = require('express')
const app = express()
const port = 3000

// ativando middleware json
app.use(express.json())

// dados
const contatos = ["João", "Maria", "Ronaldo", "Pedro"]

app.get('/contatos', (req, res) => {
  res.json(contatos)
})

app.get('/contatos/:id', (req, res) => {
  const id = req.params.id
  const contato = contatos[id]
  res.json(contato)
})

app.post('/contatos', (req, res) => {
  const contato = req.body.nome
  contatos.push(contato)
  res.status(201).json({ message: "Contato criado com sucesso!" })
})

app.put('/contatos/:id', (req, res) => {
  const id = req.params.id
  const contato = req.body
  contatos[id] = contato
  res.status(200).json({ message: "Contato atualizado com sucesso!" })
})

app.delete('/contatos/:id', (req, res) => {
  const id = req.params.id
  contatos.splice(id, 1)
  res.status(200).json({ message: "Contato excluído com sucesso!" })
})


app.listen(port, () => {
  console.log(`App rodando na porta em http://localhost:${port}`)
})
