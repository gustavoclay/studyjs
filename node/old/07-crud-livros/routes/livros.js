const express = require('express')
const router = express.Router()

const livros = []

function validarLivro(req, res, next) {
  const id = req.params.id
  const livro = livros.find(livro => livro.id == id)
  if (livro) {
    req.livro = livro
    next()
  } else {
    return res.status(404).send({ message: 'Livro não encontrado' })
  }
}

function validarAtributos(req, res, next) {
  const dados = req.body
  if (!dados.titulo || !dados.autor || !dados.editora || !dados.ano || !dados.preco) {
    return res.status(400).json({ message: 'Titulo, autor, editora, ano e preco são obrigatórios' })
  }
  next()
}

router.get('/livros', (req, res) => {
  res.json(livros)
})

router.get('/livros/:id', validarLivro, (req, res) => {
  res.json(req.livro)
})

router.post('/livros', validarAtributos, (req, res) => {
  const dados = req.body

  const livro = {
    id: Math.round(Math.random() * 1000),
    titulo: dados.titulo,
    autor: dados.autor,
    editora: dados.editora,
    ano: dados.ano,
    preco: dados.preco
  }

  livros.push(livro)

  res.status(201).json(
    {
      message: 'Livro criado com sucesso!',
      livro
    }
  )

})

router.put('/livros/:id', validarAtributos, validarLivro, (req, res) => {
  const id = req.params.id
  const dados = req.body

  const index = livros.findIndex(livro => livro.id == id)

  livros[index] = {
    id: Number(id),
    titulo: dados.titulo,
    autor: dados.autor,
    editora: dados.editora,
    ano: dados.ano,
    preco: dados.preco
  }

  res.status(200).json(
    {
      message: 'Livro atualizado com sucesso!',
      livro: livros[index]
    }
  )

})

router.delete('/livros/:id', validarLivro, (req, res) => {
  const id = req.params.id
  const index = livros.findIndex(livro => livro.id == id)
  livros.splice(index, 1)
  res.status(204).json()
})

router.get('/livros/autor/:autor', (req, res) => {
  res.json(livros.filter(f => f.autor == req.params.autor))
})

router.get('/livros/preco/media', (req, res) => {
  let soma = 0
  if (livros.length > 0) {
    livros.forEach((livro) => {
      soma += Number(livro.preco)
    })
    const media = soma / livros.length
    res.json({ media: media })
  } else {
    res.json({ media: 0 })
  }
})


module.exports = router
