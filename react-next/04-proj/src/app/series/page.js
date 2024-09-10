'use client'

import { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Pagina from '../components/Pagina'
import apiFilmes from '../services/apiFilmes'

export default function page() {

  const [series, setSeries] = useState([])

  useEffect(() => {
    getSeries()
  }, [])

  async function getSeries() {
    const resultado = await apiFilmes.get('/tv/popular?language=pt-BR')
    const series = resultado.data.results
    setSeries(series)
  }

  return (
    <Pagina titulo="Séries Populares">

      <Row md={4}>

        {series.map(serie => {
          return (
            <Col className='py-3'>
              <Card style={{ height: '100%' }}>
                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + serie.backdrop_path} />
                <Card.Body>
                  <Card.Title>{serie.title}</Card.Title>
                  <Card.Text>
                    <p>Lançamento: {serie.first_air_date}</p>
                    <p>Nota: {Math.floor(serie.vote_average)} ⭐</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-end'>
                  <Button href={'/series/' + serie.id}>Detalhes</Button>
                </Card.Footer>
              </Card>
            </Col>
          )
        })}
      </Row>

    </Pagina>
  )
}
