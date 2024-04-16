const express = require('express')
const app = express()
const PORTA = 3000

app.use(express.json())


const produtos = require('./routes/produtos')
app.use('/produtos', produtos)


app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`)
})
