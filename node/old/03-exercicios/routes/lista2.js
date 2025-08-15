const express = require('express')
const router = express.Router()


// Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
//     • O maior preço lido; e
//     • A média aritmética dos preços dos produtos.
router.post('/ex7', (req, res) => {
  const listaProdutos = []
  req.body.forEach((item) => {
    listaProdutos.push(item)
  })

  let soma = 0
  listaProdutos.forEach((produto) => {
    soma = soma + produto.preco
  })

  const media = soma / listaProdutos.length

  let maiorPreco = 0
  let maiorPrecoProduto = null
  listaProdutos.forEach((produto) => {
      if(produto.preco > maiorPreco) {
        maiorPreco = produto.preco
        maiorPrecoProduto = produto
      }
  })

  res.json({
    precoMedio: Number(media.toFixed(2)),
    maiorPreco: maiorPrecoProduto
  })
})


module.exports = router
