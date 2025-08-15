import axios from "axios"

const baseUrl = 'http://localhost:3000'

let score = 0.0
let funcionario = null
let funcionario2 = null

function printScore() {
  console.log(`Score: ${score.toFixed(2)}`)
}

async function cadastrarFuncionarios() {
  console.log('- (1,0 pontos) Criar uma rota e implementação para cadastro de funcionário (POST /funcionario)')
  console.log('ADD 1º funcionário')
  await axios.post(`${baseUrl}/funcionario`, {
    nome: 'Krebimilson',
    email: 'QbH0N@example.com',
    telefone: '123456789',
    cargo: 'DevSecOps',
    salario: 10000
  })
    .then(response => {
      if (response.status === 201 || response.status === 200) {
        console.log('✅ Pass')
        score += 1.0
      } else {
        console.log('❎ Fail')
      }
    }).catch(error => {
      console.log('❎ Fail')
    })

  // add 2º funcionário
  console.log('ADD 2º funcionário')
  await axios.post(`${baseUrl}/funcionario`, {
    nome: 'Jabison',
    email: 'dpKq5@example.com',
    telefone: '123456789',
    cargo: 'DevSecOps',
    salario: 10000
  }).then(response => {
    if (response.status === 201 || response.status === 200) {
      console.log('✅ Pass')
    } else {
      console.log('❎ Fail')
    }
  }).catch(error => {
    console.log('❎ Fail')
  })
}

async function buscarFuncionarios() {
  console.log('- (0,5 pontos) Criar uma rota e implementação para busca de todos os funcionários (GET /funcionario)')
  await axios.get(`${baseUrl}/funcionario`)
    .then(response => {
      const funcionarios = response.data
      if (funcionarios.length > 0) {
        console.log('✅ Pass')
        score += 0.5
        funcionario = funcionarios.find(f => f.email == 'QbH0N@example.com')
        funcionario2 = funcionarios.find(f => f.email == 'dpKq5@example.com')
      } else {
        console.log('❎ Fail')
      }
    }).catch(error => {
      console.log('❎ Fail')
    })
}

async function buscarFuncionarioPorID() {
  console.log('- (0,5 pontos) Criar uma rota e implementação para busca de funcionário por identificador (GET /funcionario/:id)')
  await axios.get(`${baseUrl}/funcionario/${funcionario2.id}`)
    .then(response => {
      if (response.status === 200 && response.data.email === 'dpKq5@example.com') {
        console.log('✅ Pass')
        score += 0.5
      } else {
        console.log('❎ Fail')
      }
    }).catch(error => {
      console.log('❎ Fail')
    })
}

async function atualizarFuncionario() {
  console.log('- (1,0 pontos) Criar uma rota e implementação para atualização de funcionário (PUT /funcionario/:id)')
  console.log('Update de funcionário')
  await axios.put(`${baseUrl}/funcionario/${funcionario.id}`, {
    nome: 'Joaquim',
    email: 'QbH0N_Atualizado@example.com',
    telefone: '123456789',
    cargo: 'Desenvolvedor',
    salario: 10000
  }).then(response => {
    if (response.status === 201 || response.status === 200) {
      console.log('✅ Pass')
    }
  }).catch(error => {
    console.log('❎ Fail')
  });
  console.log('Busca de funcionário')
  await axios.get(`${baseUrl}/funcionario/${funcionario.id}`).then(response => {
    if (response.status === 200 && response.data.email === 'QbH0N_Atualizado@example.com') {
      console.log('✅ Pass')
      score += 1
    }
  }).catch(error => {
    console.log('❎ Fail')
  })
}

async function deletarFuncionario() {
  console.log('- (0,5 pontos) Criar uma rota e implementação para exclusão de funcionário por identificador (DELETE /funcionario/:id)')
  console.log('Delete de funcionário')
  await axios.delete(`${baseUrl}/funcionario/${funcionario.id}`)
    .then(response => {
      console.log('✅ Pass')
    })
    .catch(error => {
      console.log('❎ Fail')
    });
  console.log('Busca de funcionário')
  await axios.get(`${baseUrl}/funcionario`)
    .then(response => {
      if (response.data.length > 0) {
        const func = response.data.find(f => f.email == 'QbH0N_Atualizado@example.com')
        if (!func) {
          score += 0.5
          console.log('✅ Pass')
        } else {
          console.log('❎ Fail')
        }
      }
    })
    .catch(error => {
      console.log('❎ Fail')
    })
}


async function validarBuscarFuncionariosPorID() {
  console.log('- (0,5 pontos) Na busca de funcionário por identificador, em caso de funcionário não localizado, responder o status referente a NOT_FOUND (GET /funcionario/:id)')
  await axios.get(`${baseUrl}/funcionario/${funcionario.id}`)
    .then(response => {
      console.log('❎ Fail')
    })
    .catch(error => {
      if (error.response.status === 404) {
        console.log('✅ Pass')
        score += 0.5
      } else {
        console.log('❎ Fail')
      }
    })
}

async function validarAtualizarFuncionario() {
  console.log('- (0,5 pontos) Na atualização de funcionário, em caso de funcionário não localizado, responder o status referente a NOT_FOUND (PUT /funcionario/:id)')
  await axios.put(`${baseUrl}/funcionario/${funcionario.id}`, {
    nome: 'Joaquim PUT NOT FOUND',
    email: 'QbH0N_Atualizado@example.com',
    telefone: '123456789',
    cargo: 'Desenvolvedor',
    salario: 10000
  })
    .then(() => {
      console.log('❎ Fail')
    })
    .catch(error => {
      if (error.response.status === 404) {
        score += 0.5
        console.log('✅ Pass')
      } else {
        console.log('❎ Fail')
      }
    })
}

async function validarDeletarFuncionario() {
  console.log('- (0,5 pontos) Na exclusão de funcionário por identificador, em caso de funcionário não localizado, responder o status referente a NOT_FOUND (DELETE /funcionario/:id)')
  await axios.delete(`${baseUrl}/funcionario/${funcionario.id}`)
    .then(() => {
      console.log('❎ Fail')
    })
    .catch(error => {
      if (error.response.status === 404) {
        score += 0.5
        console.log('✅ Pass')
      } else {
        console.log('❎ Fail')
      }
    })
}

async function validarAtributosCadastrarFuncionario() {
  console.log('- (0,75 pontos) No cadastro de funcionário, todos os campos são obrigatórios; caso não seja enviado um ou mais campos, responder o status referente a BAD_REQUEST (POST /funcionario)')
  await axios.post(`${baseUrl}/funcionario`, {
    cargo: 'Desenvolvedor',
    salario: 10000
  })
    .then(response => {
      console.log('❎ Fail')
    })
    .catch(error => {
      if (error.response.status === 400) {
        score += 0.75
        console.log('✅ Pass')
      } else {
        console.log('❎ Fail')
      }
    })
}

async function validarAtributosAtualizarFuncionario() {
  console.log('- (0,75 pontos) Na atualização de funcionário, todos os campos são obrigatórios; caso não seja enviado um ou mais campos, responder o status referente a BAD_REQUEST (PUT /funcionario/:id)')
  await axios.put(`${baseUrl}/funcionario/${funcionario2.id}`, {
    cargo: 'Desenvolvedor',
    salario: 10000
  })
    .then(response => {
      console.log('❎ Fail')
    })
    .catch(error => {
      if (error.response.status === 400) {
        score += 0.75
        console.log('✅ Pass')
      } else {
        console.log('❎ Fail')
      }
    })
}

async function buscarFuncionariosPorCargo() {
  console.log('- (0,5 pontos) Criar uma rota e implementação para busca de todos os funcionários do mesmo cargo (GET /funcionario/cargo/:cargo)')
  await axios.get(`${baseUrl}/funcionario/cargo/DevSecOps`)
    .then(response => {
      if (response.data.length > 0) {
        const funcs = response.data.filter(f => f.cargo == 'DevSecOps')
        if (funcs.length > 0) {
          console.log('✅ Pass')
          score += 0.5
        } else {
          console.log('❎ Fail')
        }
      }
    }).catch(error => {
      console.log('❎ Fail')
    })
}

async function mediaSalarial() {
  console.log('- (1,0 pontos) Criar uma rota e implementação para calcular e retornar a média salarial de todos os funcionários da lista (GET /funcionario/salarios/media)')
  const res = await axios.get(`${baseUrl}/funcionario`)

  const media = res.data.reduce((soma, funcionario) => soma + Number(funcionario.salario), 0) / res.data.length

  await axios.get(`${baseUrl}/funcionario/salarios/media`)
    .then(response => {
      if (response.data.media?.toFixed(2) === media.toFixed(2) || response.data.mediaSalarial.toFixed(2) === media.toFixed(2)) {
        console.log('✅ Pass')
        score += 1
      } else {
        console.log('❎ Fail')
      }
    }).catch(error => {
      console.log('❎ Fail')
    })


}


async function test() {
  await cadastrarFuncionarios()
  await buscarFuncionarios()
  await buscarFuncionarioPorID()
  await atualizarFuncionario()
  await deletarFuncionario()
  await validarBuscarFuncionariosPorID()
  await validarAtualizarFuncionario()
  await validarDeletarFuncionario()
  await validarAtributosCadastrarFuncionario()
  await validarAtributosAtualizarFuncionario()
  await buscarFuncionariosPorCargo()
  await mediaSalarial()

  printScore()
}

// start
test()
