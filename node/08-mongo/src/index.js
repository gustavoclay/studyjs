const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
require('dotenv').config()

// Conectando ao banco Mongo
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@apicluster.xe5oszv.mongodb.net/?retryWrites=true&w=majority&appName=APICluster`)
  .then(() => {
    console.log('Conectado ao MongoDB')
  })
  .catch((err) => {
    console.log('Erro ao conectar no MongoDB: ', err)
  })

// Middlewares
app.use(express.json())

// Model
const Tarefa = mongoose.model('tarefa', { name: String })

// Rotas
app.get('/', (req, res) => {
  res.send('Ola, mundo!')
})

// Crud
app.get('/tarefas', async (req, res) => {
  const tarefas = await Tarefa.find({})
  res.json(tarefas)
})

app.get('/tarefas/:id', async (req, res) => {
  const tarefa = await Tarefa.findById(req.params.id)
  res.json(tarefa)
})

app.post('/tarefas', async (req, res) => {
  const tarefa = new Tarefa({ name: req.body.name })
  await tarefa.save()
  res.json(tarefa)
})

app.put('/tarefas/:id', async (req, res) => {
  const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, { name: req.body.name })
  res.json(tarefa)
})

app.delete('/tarefas/:id', async (req, res) => {
  const tarefa = await Tarefa.findByIdAndDelete(req.params.id)
  res.json()
})


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
