'use client'

import { Col, Row } from "react-bootstrap"
import Pagina from "../components/Pagina"
import Cliente from "./Cliente"

export default function page() {

  const clientes = [
    {
      nome: 'Joaquim',
      sobrenome: 'Silva',
      idade: 30,
      imagem: 'https://picsum.photos/200/300?random=1'
    },
    {
      nome: 'Jorge João',
      sobrenome: 'Silva',
      idade: 32,
      imagem: 'https://picsum.photos/200/300?random=2'
    },
    {
      nome: 'Maria Melo',
      sobrenome: 'Silva',
      idade: 21,
      imagem: 'https://picsum.photos/200/300?random=3'
    },
    {
      nome: 'Joana Dark Melo',
      sobrenome: 'Silva',
      idade: 21,
      imagem: 'https://picsum.photos/200/300?random=4'
    },
    {
      nome: 'Joana Dark Melo',
      sobrenome: 'Silva',
      idade: 21,
      imagem: 'https://picsum.photos/200/300?random=5'
    },
    {
      nome: 'Joana Dark Melo',
      sobrenome: 'Silva',
      idade: 21,
      imagem: 'https://picsum.photos/200/300?random=6'
    },
    {
      nome: 'Joana Dark Melo',
      sobrenome: 'Silva',
      idade: 21,
      imagem: 'https://picsum.photos/200/300?random=7'
    }
  ]


  return (
    <Pagina titulo="Objetos">

      <Row xs={1} sm={2} md={4} xl={6} className="py-4">

        {clientes.map(cliente => {
          return (
            <Col className="py-2">
              <Cliente
                nome={cliente.nome}
                sobrenome={cliente.sobrenome}
                idade={cliente.idade}
                imagem={cliente.imagem}
              />
            </Col>
          )
        })}

      </Row>

    </Pagina>
  )
}
