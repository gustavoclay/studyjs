'use client'

import { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Pagina from '../components/Pagina'
import apiFilmes from '../services/apiFilmes'

export default function page() {

  const [atores, setAtores] = useState([])

  useEffect(() => {
    getAtores()
  }, [])

  async function getAtores() {
    const resultado = await apiFilmes.get('/person/popular?language=pt-BR')
    const atoresRecebidos = resultado.data.results
    setAtores(atoresRecebidos)
  }

  return (

    <Pagina titulo="Atores">

      <Row md={4}>

        {atores.map(ator => {
          return (
            <Col className='py-3'>
              <Card style={{ height: '100%' }}>
                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} />
                <Card.Body>
                  <Card.Title>{ator.name}</Card.Title>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-end'>
                  <Button href={'/atores/' + ator.id}>Detalhes</Button>
                </Card.Footer>
              </Card>
            </Col>
          )
        })}

      </Row>

    </Pagina>

  )
}
