const express = require('express')

const AutenticacaoController = require('../controllers/AutenticacaoController')

const { validarUsuario, validarLogin } = require('../validators/AutenticacaoValidator')

const router = express.Router()

router.post('/auth/registrar', validarUsuario, AutenticacaoController.registrar)

router.post('/auth/login', validarLogin, AutenticacaoController.login)


module.exports = router
