const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

// ativando middleware json
app.use(express.json())
// ativando cors *
app.use(cors({
  origin: '*'
}));

// rotas
const contatos = require('./routes/contatos')
app.use("/teste", contatos)


app.listen(port, () => {
  console.log(`App rodando na porta em http://localhost:${port}`)
})
