const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    endereco: String
  },
  dataNascimento: {
    type: Date,
    required: true
  },
  dataContratacao: {
    type: Date,
    required: true
  },
  genero: {
    type: String,
    required: true
  },
  endereco: {
    cep: String,
    logradouro: String,
    complemento: String,
    bairro: String,
    numero: String,
    uf: String
  },
  cargo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cargo',
    required: false
  },
  departamento: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Departamento',
    required: false
  },
}, { timestamps: true })

const Funcionario = mongoose.model('Funcionario', schema)

module.exports = Funcionario
