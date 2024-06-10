const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  dataInicio: {
    type: Date,
    required: false
  },
  dataFim: {
    type: Date,
    required: false
  },
  responsavel: {
    type: mongoose.Types.ObjectId,
    ref: 'Funcionario',
    required: false
  },
  projeto: {
    type: mongoose.Types.ObjectId,
    ref: 'Projeto',
    required: false
  }
}, { timestamps: true })

const Tarefa = mongoose.model('Tarefa', schema)

module.exports = Tarefa
