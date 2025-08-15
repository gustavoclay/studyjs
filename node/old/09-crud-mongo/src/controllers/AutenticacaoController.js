require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Usuario = require('../models/Usuario')

const JWT_SECRET = process.env.JWT_SECRET

async function registrar(req, res) {

  const { nome, email, senha } = req.body

  const usuarioExiste = await Usuario.findOne({ email })

  if (usuarioExiste) {
    return res.status(400).json({ error: 'Usuário já existe' })
  }

  const hash = await bcrypt.hash(senha, 10)

  const novoUsuario = new Usuario({
    nome,
    email,
    senha: hash
  })

  await novoUsuario.save()

  res.status(201).json({ message: 'Usuário criado com sucesso!' })
}


async function login(req, res) {

  const { email, senha } = req.body

  const usuario = await Usuario.findOne({ email })

  if (!usuario) {
    return res.status(404).json({ error: 'Usuário não encontrado' })
  }

  const comparaSenhas = await bcrypt.compare(senha, usuario.senha)

  if (!comparaSenhas) {
    return res.status(401).json({ error: 'Senha inválida' })
  }

  const token = jwt.sign({ id: usuario._id }, JWT_SECRET, { expiresIn: '10s' })

  res.status(200).json({
    mensagem: 'Login efetuado com sucesso',
    token
  })
}







module.exports = {
  registrar,
  login
}
