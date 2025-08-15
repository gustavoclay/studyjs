require('dotenv').config()
const yup = require('yup')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

const usuarioSchema = yup.object().shape({
  nome: yup.string().required('campo obrigatório'),
  email: yup.string().email('e-mail inválido').required('campo obrigatório'),
  senha: yup.string().required('campo obrigatório'),
})

const loginSchema = yup.object().shape({
  email: yup.string().email('e-mail inválido').required('campo obrigatório'),
  senha: yup.string().required('campo obrigatório'),
})

function validarUsuario(req, res, next) {
  usuarioSchema
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

function validarLogin(req, res, next) {
  loginSchema
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

function checkToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'Acesso negado' })
  }

  try {
    jwt.verify(token, JWT_SECRET)
    next()
  } catch (error) {
    return res.status(400).json({ error: 'Token inválido' })
  }

}

module.exports = {
  validarUsuario,
  validarLogin,
  checkToken
}

