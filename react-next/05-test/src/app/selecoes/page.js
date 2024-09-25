'use client'

import { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import apiFutebol from '../api/apiFutebol';
import Pagina from '../components/Pagina';

export default function page() {

  const [selecoes, setSelecoes] = useState([])


  useEffect(() => {
    buscarSelecoes()
  }, [])

  async function buscarSelecoes() {
    const resposta = await apiFutebol.get('/selecoes')
    setSelecoes(resposta.data)
    console.log(resposta.data)
  }


  return (
    <Pagina titulo="Seleções">

      <Row xs={1} sm={2} md={3} lg={4}>

        {selecoes.map(selecao => {
          return (
            <Col className='py-3'>
              <Card style={{ height: '100%' }}>
                <Card.Img variant="top" src={selecao.imagem} height={500} />
                <Card.Body>
                  <Card.Title className='text-center'>{selecao.nome}</Card.Title>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Button href={'/selecoes/' + selecao.id}>Detalhes</Button>
                </Card.Footer>
              </Card>
            </Col>
          )
        })}



      </Row>

    </Pagina>
  )

}
