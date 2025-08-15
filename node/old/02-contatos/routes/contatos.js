const express = require('express')

const router = express.Router()

// banco de dados na propria aplicação (mock)
const contatos = ["João", "Maria", "Ronaldo", "Pedro"]

router.get('/contatos', (req, res) => {
  res.json(contatos)
})

router.get('/contatos/:id', (req, res) => {
  const id = req.params.id
  const contato = contatos[id]
  res.json(contato)
})

router.post('/contatos', (req, res) => {
  const contato = req.body.nome
  contatos.push(contato)
  res.status(201).json({ message: "Contato criado com sucesso!" })
})

router.put('/contatos/:id', (req, res) => {
  const id = req.params.id
  const contato = req.body
  contatos[id] = contato.nome
  res.status(200).json({ message: "Contato atualizado com sucesso!" })
})

router.delete('/contatos/:id', (req, res) => {
  const id = req.params.id
  contatos.splice(id, 1)
  res.status(200).json({ message: "Contato excluído com sucesso!" })
})

module.exports = router
