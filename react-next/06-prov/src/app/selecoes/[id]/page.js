'use client'

import apiCopa from "@/app/apis/apiCopa"
import Pagina from "@/app/components/Pagina"
import { useEffect, useState } from "react"
import { Card, CardImg, Col, Row } from "react-bootstrap"

export default function page(props) {

  const id = props.params.id
  const [selecao, setSelecao] = useState({})

  useEffect(() => {
    buscarSelecao()
  }, [])


  async function buscarSelecao() {
    const resultado = await apiCopa.get('/selecoes/' + id)
    console.log(resultado.data)
    setSelecao(resultado.data)
  }



  return (
    // Layout
    <Pagina titulo={selecao.nome}>

      {/*  Dados da página*/}
      {selecao.id && (
        <>
          {/* Detalhes */}
          <Row>
            {/* imagem */}
            <Col md={3}>
              <CardImg src={selecao.imagem} />
            </Col>

            {/* Informações da seleção */}
            <Col>
              <p><b>Administrador:</b> {selecao.administrador}</p>
              <p><b>Fundação:</b> {selecao.fundacao}</p>
              <p><b>Estádio:</b> {selecao.estadio}</p>
              <p><b>Participações em Copas do Mundo:</b> {selecao.participacoes_copa_mundo}</p>
              <p><b>Titulos:</b> {selecao.titulos_copa_mundo}</p>
              <p><b>Descricao:</b> {selecao.descricao}</p>

            </Col>

            {/* Treinador */}
            <Col md={3}>
              <p><b>Treinado:</b> {selecao.treinador}</p>
              <CardImg src={selecao.imagem_treinador} />
            </Col>

          </Row>

          {/* Elenco */}
          <div className="text-center mt-2">
            <h2>Elenco</h2>
            <hr></hr>
          </div>

          <Row md={4}>

            {selecao.jogadores.map(
              jogador => (
                <Col className="py-3">
                  <Card style={{ height: '100%' }}>
                    <Card.Img src={jogador.imagem} height='400' />
                    <Card.Body className="text-center">
                      <Card.Text><b>Nome:</b> {jogador.nome}</Card.Text>
                      <Card.Text><b>Número:</b> {jogador.numero}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )
            )}


          </Row>


        </>
      )}
    </Pagina>
  )


}
