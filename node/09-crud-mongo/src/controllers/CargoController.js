const Cargo = require('../models/Cargo')

async function getAll(req, res) {
  res.json(await Cargo.find())
}

async function getById(req, res) {
  const cargo = await Cargo.findById(req.params.id)
  if (!cargo) {
    return res.status(404).json({ mensagem: 'Cargo não encontrado' })
  }
  res.json(cargo)
}

async function create(req, res) {
  // #swagger.tags = ['Cargos']
  const { nome, descricao, salario } = req.body
  const cargo = new Cargo({ nome, descricao, salario })
  return res.status(201).json(await cargo.save())
}

async function update(req, res) {
  const cargo = await Cargo.findByIdAndUpdate(req.params.id, req.body, { new: true })
  if (!cargo) {
    return res.status(404).json({ mensagem: 'Cargo não encontrado' })
  }
  return res.json(cargo)
}

async function remove(req, res) {
  const cargo = await Cargo.findByIdAndDelete(req.params.id)
  if (!cargo) {
    return res.status(404).json({ mensagem: 'Cargo não encontrado' })
  }
  res.json({ message: 'Cargo excluído com sucesso!' })
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}
