const mongoose = require('mongoose')
const yup = require('yup')

function validarObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id)
}

async function validarId(req, res, next) {
  const idIsValid = validarObjectId(req.params.id)
  if (!idIsValid) {
    return res.status(400).json({ mensagem: 'id inválido' })
  }
  next()
}

module.exports = {
  validarId,
  validarObjectId
}
