'use client'

import { useEffect, useState } from "react";
import { CardImg, Carousel, Col, Row } from "react-bootstrap";
import apiFutebol from "./api/apiFutebol";
import Pagina from "./components/Pagina";

export default function Home() {

  const [copa, setCopa] = useState()

  useEffect(() => {
    buscarCopa()
  }, [])

  useEffect(() => {
    buscarCopa()
  }, [])

  async function buscarCopa() {
    const resposta = await apiFutebol.get('/copa_mundo')
    setCopa(resposta.data)
    console.log(resposta.data)
  }


  return (

    <Pagina titulo={"Copa do Mundo 2022"}>

      {copa && (
        <>

          <div className="py-3 text-center">
            <h2>Detalhes</h2>
            <hr></hr>
          </div>

          <Row>

            <Col md={3}>
              <CardImg variant="top" src={copa.imagem} />
            </Col>

            <Col md={9}>
              <p><strong>Ano: </strong>{copa.ano}</p>
              <p><strong>Pais sede: </strong>{copa.pais_sede}</p>
              <p><strong>Data inicio: </strong>{copa.data_inicio}</p>
              <p><strong>Data fim: </strong>{copa.data_fim}</p>
              <p><strong>Participantes: </strong>{copa.participantes}</p>
              <p><strong>Vencedor: </strong>{copa.vencedor.pais}</p>
              <p><strong>Artilheiro: </strong>{copa.artilheiro.jogador}</p>
              <p><strong>Melhor jogador: </strong>{copa.melhor_jogador.jogador}</p>
              <p><strong>Descrição: </strong>{copa.descricao}</p>
            </Col>

          </Row>

          <div className="py-3 text-center">
            <h2>Estadios</h2>
            <hr></hr>
          </div>

          <Row className="mb-3">

            <Carousel style={{ width: '100%', height: '700' }}>

              {copa.estadios.map(estadio => {
                return (
                  <Carousel.Item>
                    <img src={estadio.imagem} width={'100%'} height={700} />
                    <Carousel.Caption><h1>{estadio.nome}</h1></Carousel.Caption>
                  </Carousel.Item>
                )
              })}

            </Carousel>

          </Row>
        </>

      )}

    </Pagina>

  );
}
