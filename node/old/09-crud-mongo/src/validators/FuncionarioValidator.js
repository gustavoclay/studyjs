const yup = require('yup')
const { validarObjectId } = require('../validators/IdValidator')

const FuncionarioSchema = yup.object().shape({
  nome: yup.string().required('campo obrigatório'),
  cpf: yup.string().required('campo obrigatório'),
  email: yup.string().email('e-mail inválido').required('campo obrigatório'),
  telefone: yup.string().required('campo obrigatório'),
  dataNascimento: yup.date().required('campo obrigatório'),
  dataContratacao: yup.date().required('campo obrigatório'),
  genero: yup.string().required('campo obrigatório'),
  cargo: yup.string().nullable().test(
    'validar-id',
    'id inválido',
    value => !value || validarObjectId(value)
  )
})

function validarFuncionario(req, res, next) {
  FuncionarioSchema
    .validate(req.body, { abortEarly: false })
    .then(() => {
      next()
    })
    .catch(err => {
      const errors = err.inner.map(error => {
        return {
          campo: error.path,
          mensagem: error.message
        }
      })
      return res.status(400).json(
        {
          mensagem: 'Falha na validação dos campos',
          erro: errors
        }
      )
    })
}

module.exports = {
  validarFuncionario
}

