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
  dataInicio: {
    type: Date,
    required: false
  },
  dataFim: {
    type: Date,
    required: false
  },
}, { timestamps: true })

const Projeto = mongoose.model('Projeto', schema)

module.exports = Projeto
