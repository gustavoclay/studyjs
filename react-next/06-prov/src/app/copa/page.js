'use client'

import { useEffect, useState } from 'react'
import { CardImg, Carousel, Col, Row } from 'react-bootstrap'
import apiCopa from '../apis/apiCopa'
import Pagina from '../components/Pagina'

export default function CopaPage() {

  const [copa, setCopa] = useState({})

  useEffect(() => {
    buscarCopa()
  }, [])

  async function buscarCopa() {
    const resultado = await apiCopa.get('/copa_mundo')
    console.log(resultado.data)
    setCopa(resultado.data)
  }


  return (
    // Layout
    <Pagina titulo="Copa do Mundo 2022">

      {/* Dados da Página */}
      {/* Se copa.ano existe, mostra os dados na tela */}
      {copa.ano && (
        <>
          {/* Titulo Detalhes */}
          <div>
            <h2 className='text-center'>Detalhes</h2>
            <hr></hr>
          </div>
          {/* Detalhes */}
          <Row>
            {/* Imagem */}
            <Col md={3}>
              <CardImg src={copa.imagem} />
            </Col>
            {/* Textos */}
            <Col md={9}>
              <p><b>Ano:</b> {copa.ano}</p>
              <p><b>País sede:</b> {copa.pais_sede}</p>
              <p><b>Data Inicio:</b> {copa.data_inicio}</p>
              <p><b>Data Fim:</b> {copa.data_fim}</p>
              <p><b>Participantes:</b> {copa.participantes}</p>
              <p><b>Vencedor:</b> {copa.vencedor.pais}</p>
              <p><b>Artilheiro:</b> {copa.artilheiro.jogador}</p>
              <p><b>Melhor Jogador:</b> {copa.melhor_jogador.jogador}</p>
              <p><b>Descrição:</b> {copa.descricao}</p>
            </Col>
          </Row>

          {/* Titulo Estadios */}
          <div>
            <h2 className='text-center'>Estádios</h2>
            <hr></hr>
          </div>
          {/* Carousel Estádios */}
          <Row className='mb-3'>
            <Carousel>

              {copa.estadios.map(
                estadio => (
                  <Carousel.Item>
                    <CardImg height={700} src={estadio.imagem} />
                    <Carousel.Caption>{estadio.nome}</Carousel.Caption>
                  </Carousel.Item>
                )
              )}

            </Carousel>
          </Row>

        </>

      )}

    </Pagina>
  )
}
