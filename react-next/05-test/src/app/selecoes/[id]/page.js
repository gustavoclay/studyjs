'use client'

import apiFutebol from "@/app/api/apiFutebol"
import Pagina from "@/app/components/Pagina"
import { useEffect, useState } from "react"
import { Card, CardImg, Col, Row } from "react-bootstrap"

export default function page(props) {

  const [selecao, setSelecao] = useState({})


  useEffect(() => {
    buscarSelecao()
  }, [])

  async function buscarSelecao() {
    const resultado = await apiFutebol.get('/selecoes/' + props.params.id)
    setSelecao(resultado.data)
    console.log(resultado.data)
  }


  return (
    <Pagina titulo={selecao.nome}>

      {selecao.id && (
        <>
          <Row>
            <Col md={3}>
              <CardImg variant="top" src={selecao.imagem} />
            </Col>

            <Col md={6}>
              <p><strong>Admnistrador: </strong>{selecao.administrador}</p>
              <p><strong>Fundação: </strong>{selecao.fundacao}</p>
              <p><strong>Estadio: </strong>{selecao.estadio}</p>
              <p><strong>Participações em Copa do Mundo: </strong>{selecao.participacoes_copa_mundo}</p>
              <p><strong>Titulos em Copa do Mundo: </strong>{selecao.titulos_copa_mundo}</p>
              <p><strong>Descrição: </strong>{selecao.descricao}</p>
            </Col>

            <Col md={3}>
              <p><strong>Treinador: </strong>{selecao.treinador}</p>
              <CardImg variant="top" src={selecao.imagem_treinador} />
            </Col>

          </Row>

          <div className="py-3 text-center">
            <h2>Elenco</h2>
            <hr></hr>
          </div>

          <Row md={4}>
            {selecao.jogadores.map(jogador => {
              return (
                <Col className='py-3'>
                  <Card style={{ height: '100%' }}>
                    <Card.Img variant="top" src={jogador.imagem} height={400} />
                    <Card.Body>
                      <Card.Text className='text-center'><strong>Nome:</strong> {jogador.nome}</Card.Text>
                      <Card.Text className='text-center'><strong>Número:</strong> {jogador.numero}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>


        </>


      )}

    </Pagina>
  )
}
