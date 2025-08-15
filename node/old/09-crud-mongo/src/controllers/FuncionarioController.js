const Funcionario = require('../models/Funcionario')

async function getAll(req, res) {
  res.json(await Funcionario.find().populate('cargo'))
}

async function getById(req, res) {
  const funcionario = await Funcionario.findById(req.params.id).populate('cargo')
  if (!funcionario) {
    return res.status(404).json({ mensagem: 'Funcionario não encontrado' })
  }
  res.json(funcionario)
}

async function create(req, res) {
  const funcionario = new Funcionario(req.body)
  return res.status(201).json(await funcionario.save())
}

async function update(req, res) {
  const funcionario = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true })
  if (!funcionario) {
    return res.status(404).json({ mensagem: 'Funcionario não encontrado' })
  }
  return res.json(funcionario)
}

async function remove(req, res) {
  const funcionario = await Funcionario.findByIdAndDelete(req.params.id)
  if (!funcionario) {
    return res.status(404).json({ mensagem: 'Funcionario não encontrado' })
  }
  res.json({ message: 'Funcionario excluído com sucesso!' })
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}
