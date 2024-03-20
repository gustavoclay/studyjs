const express = require('express')
const router = express.Router()

/* 1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.
 */

// Query Params
router.get('/ex1', (req, res) => {
  console.log(req.query)

  const nota1 = Number(req.query.nota1)
  const nota2 = Number(req.query.nota2)
  const nota3 = Number(req.query.nota3)
  const nota4 = Number(req.query.nota4)

  const media = (nota1 + nota2 + nota3 + nota4) / 4

  const mensagem = media >= 7.0 ? "Aprovado" : "Reprovado"

  const resultado = { media, mensagem }

  res.send(resultado)

})

// Path Params

router.get('/ex1/:nota1/:nota2/:nota3/:nota4', (req, res) => {
  console.log(req.params)

  const nota1 = Number(req.params.nota1)
  const nota2 = Number(req.params.nota2)
  const nota3 = Number(req.params.nota3)
  const nota4 = Number(req.params.nota4)

  const media = (nota1 + nota2 + nota3 + nota4) / 4

  const mensagem = media >= 7.0 ? "Aprovado" : "Reprovado"

  const resultado = { media, mensagem }

  res.send(resultado)

})


// Body

router.post('/ex1', (req, res) => {
  console.log(req.body)

  const nota1 = Number(req.body.nota1)
  const nota2 = Number(req.body.nota2)
  const nota3 = Number(req.body.nota3)
  const nota4 = Number(req.body.nota4)

  const media = (nota1 + nota2 + nota3 + nota4) / 4

  const mensagem = media >= 7.0 ? "Aprovado" : "Reprovado"

  const resultado = { media, mensagem }

  res.send(resultado)

})

module.exports = router
