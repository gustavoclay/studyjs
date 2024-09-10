'use client'

import { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Pagina from '../components/Pagina'
import apiFilmes from '../services/apiFilmes'

export default function page() {

  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    getFilmes()
  }, [])

  async function getFilmes() {
    const resultado = await apiFilmes.get('/movie/popular?language=pt-BR')
    const filmes = resultado.data.results
    setFilmes(filmes)
  }

  return (
    <Pagina titulo="Filmes Populares">

      <Row md={4}>

        {filmes.map(filme => {
          return (
            <Col className='py-3'>
              <Card style={{ height: '100%' }}>
                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path} />
                <Card.Body>
                  <Card.Title>{filme.title}</Card.Title>
                  <Card.Text>
                    <p>Lançamento: {filme.release_date}</p>
                    <p>Nota: {Math.floor(filme.vote_average)} ⭐</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-end'>
                  <Button href={'/filmes/' + filme.id}>Detalhes</Button>
                </Card.Footer>
              </Card>

            </Col>
          )
        })}
      </Row>

    </Pagina>
  )
}
