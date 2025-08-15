const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: false
  },
  salario: {
    type: Number,
    min: 1412.00,
    required: true
  },
}, { timestamps: true })

const Cargo = mongoose.model('Cargo', schema)

module.exports = Cargo
