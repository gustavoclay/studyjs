'use client'

import { Card, Col, ListGroup, Row } from 'react-bootstrap'
import Pagina from '../components/Pagina'

export default function page() {

  const alunos = [
    {
      "nome": "João Pedro",
      "matricula": "123456",
      "idade": 20,
      "imagem": "https://i.pinimg.com/564x/a4/00/48/a4004851667dcb07d94649a8329bf79a.jpg",
      "curso": "Análise e Desenvolvimento de Sistemas",
      "disciplina": "Construção de Front-end"
    },
    {
      "nome": "Maria Clara",
      "matricula": "123456",
      "idade": 20,
      "imagem": "https://i.pinimg.com/564x/f9/ae/a6/f9aea6c050bdaf4116fa66d320af445e.jpg",
      "curso": "Análise e Desenvolvimento de Sistemas",
      "disciplina": "Construção de Front-end"
    },
    {
      "nome": "Joaquim Rodrigues",
      "matricula": "123456",
      "idade": 20,
      "imagem": "https://i.pinimg.com/564x/5d/55/b5/5d55b5d38f16ca04f04012bcd14405c6.jpg",
      "curso": "Análise e Desenvolvimento de Sistemas",
      "disciplina": "Construção de Front-end"
    }
  ]

  return (
    <Pagina titulo="Alunos">
      <Row md={4} className='d-flex justify-content-center'>

        {alunos.map(
          aluno => (
            <Col className='py-3'>
              <Card border="secondary" style={{ height: '100%' }}>
                <Card.Header className='text-center'>
                  <Card.Title><b>{aluno.nome}</b></Card.Title>
                </Card.Header>
                <Card.Img src={aluno.imagem} height={500} />
                <ListGroup className="list-group-flush">
                  <ListGroup.Item><b>Matrícula</b>: {aluno.matricula}</ListGroup.Item>
                  <ListGroup.Item><b>Idade</b>: {aluno.idade}</ListGroup.Item>
                  <ListGroup.Item><b>Curso</b>: {aluno.curso}</ListGroup.Item>
                  <ListGroup.Item><b>Disciplina</b>: {aluno.disciplina}</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          )
        )}

      </Row>

    </Pagina>
  )
}
