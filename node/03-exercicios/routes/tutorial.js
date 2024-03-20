const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send("Rota principal")
})

router.get('/hello', (req, res) => {
  res.send("Ola, mundo!")
})

router.get('/nome', (req, res) => {
  res.send("Gustavo Clay")
})

module.exports = router
