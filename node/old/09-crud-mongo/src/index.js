const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

const autenticacaoRoutes = require('./routes/autenticacao.routes')
app.use(autenticacaoRoutes)

const routes = require('./routes/routes')
app.use(routes)


const dbConnection = require('./db/connection')
dbConnection()

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
