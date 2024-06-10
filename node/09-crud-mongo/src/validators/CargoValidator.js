const yup = require('yup')

const CargoSchema = yup.object().shape({
  nome: yup.string().required('campo obrigatório'),
  descricao: yup.string(),
  salario: yup.number().min(1412.00, 'o valor minimo deve ser de R$ 1412,00').required('campo obrigatório')
})

function validarCargo(req, res, next) {
  CargoSchema
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
  validarCargo
}

