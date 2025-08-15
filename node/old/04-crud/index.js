//Configuração do servidor
const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 3000

// registrando middlewares
// formas de ler json
app.use(express.json())

// rota inicial / endpoint
app.get('/', (req, res) => {
  res.json({ mensagem: "Ola, mundo!" })
})

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose
  .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.xe5oszv.mongodb.net/?retryWrites=true&w=majority&appName=APICluster`)
  .then(() => {
    console.log('Conectado ao MongoDB')
  })
  .catch((err) => {
    console.log(err)
  })

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
