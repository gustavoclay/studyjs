const express = require('express')
const router = express.Router()

const produtos = [
  {
    id: 1,
    nome: 'Coca-cola',
    preco: 5.0
  },
  {
    id: 2,
    nome: 'Pepsi',
    preco: 5.0
  }
]

router.get('/', (req, res) => {
  res.json(produtos)
})


router.post('/', (req, res) => {
  const nome = req.body.nome
  const preco = Number(req.body.preco)

  if (!nome || !preco) {
    res.status(400).json({ message: 'Nome e preço são obrigatórios' })
  }

  const novoProduto = {
    id: produtos.length + 1,
    nome,
    preco
  }

  produtos.push(novoProduto)

  res.status(201).json({
    message: 'Produto criado com sucesso',
    produto: novoProduto
  })
})


router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  const produto = produtos.find(produto => produto.id === id)
  if (produto) {
    res.json(produto)
  } else {
    res.status(404).json({ message: 'Produto não encontrado' })
  }
})

router.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  const nome = req.body.nome
  const preco = Number(req.body.preco)

  const produtoAtualizado = {
    id,
    nome,
    preco
  }

  const index = produtos.findIndex(produto => produto.id === id)

  if (index === -1) {
    res.status(404).json({ message: 'Produto não encontrado' })
  }

  produtos[index] = produtoAtualizado

  res.json({
    message: 'Produto atualizado com sucesso',
    produto: produtoAtualizado
  })
})


router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)

  const index = produtos.findIndex(produto => produto.id === id)

  if (index === -1) {
    res.status(404).json({ message: 'Produto não encontrado' })
  }

  produtos.splice(index, 1)
  res.json({ message: 'Produto excluído com sucesso' })
})



module.exports = router
