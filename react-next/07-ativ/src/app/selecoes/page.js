'use client'

import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import apiCopa from "../apis/apiCopa";
import Pagina from "../components/Pagina";


export default function SelecoesPage() {

  const [selecoes, setSelecoes] = useState([])

  useEffect(() => {
    buscarSelecoes()
  }, [])


  async function buscarSelecoes() {
    const resultado = await apiCopa.get('/selecoes')
    console.log(resultado.data)
    setSelecoes(resultado.data)
  }


  return (
    // Layout
    <Pagina titulo="Seleções">

      {/* Dados da Página */}
      <Row>

        {selecoes.map(
          selecao => (
            <Col>
              <Card style={{ height: '100%' }}>
                <Card.Img src={selecao.imagem} />
                <Card.Body className="text-center">
                  <Card.Title>{selecao.nome}</Card.Title>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Button href={"/selecoes/" + selecao.id}>Detalhes</Button>
                </Card.Footer>
              </Card>
            </Col>
          )
        )}

      </Row>



    </Pagina>
  )
}
