import axios from "axios"

const baseUrl = 'http://localhost:3000'

let score = 0.0
let livro = null
let livro2 = null

function printScore() {
  console.log(`Score: ${score.toFixed(2)}`)
}

async function cadastrar() {
  console.log('- (1,0 pontos) Criar uma rota e implementação para cadastro de livro (POST /livros)')
  console.log('ADD 1º')
  await axios.post(`${baseUrl}/livros`, {
    titulo: 'Livro TESTE1',
    autor: 'DevSecOps',
    editora: 'Desenvolvedora',
    ano: 2020,
    preco: 30.01
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

  console.log('ADD 2º')
  await axios.post(`${baseUrl}/livros`, {
    titulo: "Livro TESTE2",
    autor: "DevSecOps",
    editora: "Desenvolvedora",
    ano: 2021,
    preco: 40.01
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

async function buscar() {
  console.log('- (0,5 pontos) Criar uma rota e implementação para busca de todos os livros (GET /livros)')
  await axios.get(`${baseUrl}/livros`)
    .then(response => {
      const livros = response.data
      if (livros.length > 0) {
        console.log('✅ Pass')
        score += 0.5
        livro = livros.find(f => f.titulo == 'Livro TESTE1')
        livro2 = livros.find(f => f.titulo == 'Livro TESTE2')
      } else {
        console.log('❎ Fail')
      }
    }).catch(error => {
      console.log('❎ Fail')
    })
}

async function buscarPorID() {
  console.log('- (0,5 pontos) Criar uma rota e implementação para busca de livro por identificador (GET /livros/:id)')
  await axios.get(`${baseUrl}/livros/${livro2.id}`)
    .then(response => {
      if (response.status === 200 && response.data.titulo === 'Livro TESTE2') {
        console.log('✅ Pass')
        score += 0.5
      } else {
        console.log('❎ Fail')
      }
    }).catch(error => {
      console.log('❎ Fail')
    })
}

async function atualizar() {
  console.log('- (1,0 pontos) Criar uma rota e implementação para atualização de livro (PUT /livros/:id)')
  console.log('Update')
  await axios.put(`${baseUrl}/livros/${livro.id}`, {
    "titulo": "LivroTESTE1 Atualizado",
    "autor": "DevSecOps",
    "editora": "Desenvolvedora",
    "ano": 2020,
    "preco": 30.01
  }).then(response => {
    if (response.status === 201 || response.status === 200) {
      console.log('✅ Pass')
    }
  }).catch(error => {
    console.log('❎ Fail')
  });
  console.log('Busca')
  await axios.get(`${baseUrl}/livros/${livro.id}`).then(response => {
    if (response.status === 200 && response.data.titulo === 'LivroTESTE1 Atualizado') {
      console.log('✅ Pass')
      score += 1
    }
  }).catch(error => {
    console.log('❎ Fail')
  })
}

async function deletar() {
  console.log('- (0,5 pontos) Criar uma rota e implementação para exclusão de livro por identificador (DELETE /livros/:id)')
  console.log('Delete')
  await axios.delete(`${baseUrl}/livros/${livro.id}`)
    .then(response => {
      console.log('✅ Pass')
    })
    .catch(error => {
      console.log('❎ Fail')
    });
  console.log('Busca')
  await axios.get(`${baseUrl}/livros`)
    .then(response => {
      if (response.data.length > 0) {
        const liv = response.data.find(f => f.titulo == 'LivroTESTE1 Atualizado')
        if (!liv) {
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


async function validarBuscarPorID() {
  console.log('- (0,5 pontos) Na busca de livro por identificador, em caso de livro não encontrado, responder o status referente a NOT_FOUND (GET /livros/:id)')
  await axios.get(`${baseUrl}/livros/${livro.id}`)
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

async function validarAtualizar() {
  console.log('- (0,5 pontos) Na atualização de livro, em caso de livro não encontrado, responder o status referente a NOT_FOUND (PUT /livros/:id)')
  await axios.put(`${baseUrl}/livros/${livro.id}`, {
    "titulo": "LivroTESTE1 Atualizado",
    "autor": "DevSecOps",
    "editora": "Desenvolvedora",
    "ano": 2020,
    "preco": 30.01
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

async function validarDeletar() {
  console.log('- (0,5 pontos) Na exclusão de livro por identificador, em caso de livro não encontrado, responder o status referente a NOT_FOUND (DELETE /livros/:id)')
  await axios.delete(`${baseUrl}/livros/${livro.id}`)
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

async function validarAtributosCadastrar() {
  console.log('- (0,75 pontos) No cadastro de livro, todos os campos são obrigatórios; caso não seja enviado um ou mais campos, responder o status referente a BAD_REQUEST (POST /livros)')
  await axios.post(`${baseUrl}/livros`, {
    ano: 2000,
    preco: 100.00
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

async function validarAtributosAtualizar() {
  console.log('- (0,75 pontos) Na atualização de livro, todos os campos são obrigatórios; caso não seja enviado um ou mais campos, responder o status referente a BAD_REQUEST (PUT /livros/:id)')
  await axios.put(`${baseUrl}/livros/${livro2.id}`, {
    ano: 2000,
    preco: 100.00
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

async function buscarPorAutor() {
  console.log('- (0,5 pontos) Criar uma rota e implementação para busca de todos os livros do mesmo autor (GET /livros/autor/:autor)')
  await axios.get(`${baseUrl}/livros/autor/DevSecOps`)
    .then(response => {
      if (response.data.length > 0) {
        const funcs = response.data.filter(f => f.autor == 'DevSecOps')
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

async function media() {
  console.log('- (1,0 pontos) Criar uma rota e implementação para calcular e retornar o preço médio de todos os livros da lista (GET /livros/preco/media)')
  const res = await axios.get(`${baseUrl}/livros`)

  const media = res.data.reduce((soma, li) => soma + Number(li.preco), 0) / res.data.length

  await axios.get(`${baseUrl}/livros/preco/media`)
    .then(response => {
      if (response.data.media?.toFixed(2) === media.toFixed(2) || response.data?.mediaPreco.toFixed(2) === media.toFixed(2)) {
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
  await cadastrar()
  await buscar()
  await buscarPorID()
  await atualizar()
  await deletar()
  await validarBuscarPorID()
  await validarAtualizar()
  await validarDeletar()
  await validarAtributosCadastrar()
  await validarAtributosAtualizar()
  await buscarPorAutor()
  await media()

  printScore()
}

// start
test()
