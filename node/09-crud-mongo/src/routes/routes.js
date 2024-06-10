const express = require('express')

const CargoController = require('../controllers/CargoController')
const FuncionarioController = require('../controllers/FuncionarioController')

const { validarId } = require('../validators/IdValidator')
const { validarCargo } = require('../validators/CargoValidator')
const { validarFuncionario } = require('../validators/FuncionarioValidator')
const { checkToken } = require('../validators/AutenticacaoValidator')

const router = express.Router()

// Cargos
router.get('/cargos', checkToken, CargoController.getAll)
router.get('/cargos/:id', validarId, CargoController.getById)
router.post('/cargos', validarCargo, CargoController.create)
router.put('/cargos/:id', validarId, validarCargo, CargoController.update)
router.delete('/cargos/:id', validarId, CargoController.remove)

// Funcionários
router.get('/funcionarios', FuncionarioController.getAll)
router.get('/funcionarios/:id', validarId, FuncionarioController.getById)
router.post('/funcionarios', validarFuncionario, FuncionarioController.create)
router.put('/funcionarios/:id', validarId, validarFuncionario, FuncionarioController.update)
router.delete('/funcionarios/:id', validarId, FuncionarioController.remove)

module.exports = router
