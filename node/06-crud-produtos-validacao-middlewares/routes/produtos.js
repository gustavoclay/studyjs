const express = require('express')
const router = express.Router()

const produtos = []

// midlewares
// Middleware para validar se uma produto foi encontrada
function validarProduto(req, res, next) {
  const id = req.params.id
  const produto = produtos.find(produto => produto.id == id)
  if (produto) {
    req.produto = produto
    next()
  } else {
    return res.status(404).send({ message: 'Produto não encontrado' })
  }
}

// Middleware para validar os atributos
function validarAtributos(req, res, next) {
  const dadosProduto = req.body
  if (!dadosProduto.nome || !dadosProduto.preco || !dadosProduto.estoque || !dadosProduto.tipo) {
    return res.status(400).json({ message: 'Nome, preço, tipo e estoque são obrigatórios' })
  }
  next()
}

router.get('/produtos', (req, res) => {
  res.json(produtos)
})

router.get('/produtos/:id', validarProduto, (req, res) => {
  res.json(req.produto)
})

router.post('/produtos', validarAtributos, (req, res) => {
  const dadosProduto = req.body

  const produto = {
    id: Math.round(Math.random() * 1000),
    nome: dadosProduto.nome,
    preco: dadosProduto.preco,
    tipo: dadosProduto.tipo,
    estoque: dadosProduto.estoque
  }

  produtos.push(produto)

  res.status(201).json(
    {
      message: 'Produto criado com sucesso!',
      produto: produto
    }
  )

})

router.put('/produtos/:id', validarAtributos, validarProduto, (req, res) => {
  const id = req.params.id
  const dadosProduto = req.body

  const index = produtos.findIndex(produto => produto.id == id)

  produtos[index] = {
    id: Number(id),
    nome: dadosProduto.nome,
    preco: dadosProduto.preco,
    tipo: dadosProduto.tipo,
    estoque: dadosProduto.estoque
  }

  res.status(200).json(
    {
      message: 'Produto atualizado com sucesso!',
      produto: produtos[index]
    }
  )

})

router.delete('/produtos/:id', validarProduto, (req, res) => {
  const id = req.params.id
  const index = produtos.findIndex(produto => produto.id == id)
  produtos.splice(index, 1)
  res.status(204).json()
})

router.get('/produtos/estoque/quantidade', (req, res) => {
  const estoque = 0
  produtos.forEach((produto) => {
    estoque += Number(produto.estoque)
  })
  res.json({ estoque: estoque })
})

router.get('/produtos/preco/media', (req, res) => {
  let soma = 0
  if (produtos.length > 0) {
    produtos.forEach((produto) => {
      soma += Number(produto.preco)
    })
    const media = soma / produtos.length
    res.json({ media: media })
  } else {
    res.json({ media: 0 })
  }
})

router.get('/produtos/tipo/:tipo', (req, res) => {
  const tipo = req.params.tipo
  const produtosFiltrados = produtos.filter(produto => produto.tipo === tipo)
  res.json(produtosFiltrados)
})


module.exports = router
