const express = require('express')
const PORTA = 3000

const app = express()

// Middlewares
app.use(express.json())

app.use((req, res, next) => {
  console.log("Time: " + new Date().toISOString())
  next();
});


// Rotas
const tutorial = require('./routes/tutorial')
const lista1 = require('./routes/lista1')

app.use('/', tutorial)
app.use('/lista1', lista1)


app.listen(PORTA, () => {
  console.log(`Servidor iniciado em http://localhost:${PORTA}`)
})
