'use client'

import Pagina from '@/app/components/Pagina'
import { Card, Col, Row } from 'react-bootstrap'
import Link from 'next/link'

export default function page() {

  const categorias = [
    {
      "id": 1,
      "nome": "Beleza",
      "imagem": "https://picsum.photos/200/300?random=1"
    },
    {
      "id": 2,
      "nome": "Perfumes",
      "imagem": "https://picsum.photos/200/300?random=2"
    }
  ]




  return (
    <Pagina titulo="Categorias">

      <Row className='mt-4'>
        {categorias.map((categoria) => {
          return (
            <Col>
              <Card>
                <Card.Img variant="top" src={categoria.imagem} />
                <Card.Body>
                  <Card.Title>
                    <Link href={`/loja/categorias/${categoria.nome}`}>
                      {categoria.nome}
                    </Link>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          )
        })
        }
      </Row>
    </Pagina>
  )
}
