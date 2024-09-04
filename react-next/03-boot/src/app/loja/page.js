'use client'

import { Card, Col, Row } from 'react-bootstrap'
import Pagina from '../components/Pagina'
import Link from 'next/link'

export default function page() {

  const categorias = [
    {
      id: 1,
      nome: 'Smartphones',
      rota: 'smartphones',
      imagem: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      nome: 'Tablets',
      rota: 'tablets',
      imagem: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      nome: 'Notebooks',
      rota: 'notebooks',
      imagem: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      nome: 'Acessórios',
      rota: 'acessorios',
      imagem: 'https://images.unsplash.com/photo-1628570220294-20b6bd9546ae?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]



  return (
    <Pagina titulo="Loja">

      <Row xs={1} sm={2} md={3} lg={4}>

        {categorias.map(categoria => {
          return (
            <Col className='py-2'>
              <Link href={`/loja/${categoria.rota}`} className='text-decoration-none'>
              <Card>
                <Card.Img variant="" src={categoria.imagem} height={150} />
                <Card.Body className='text-center'>
                  <Card.Title>{categoria.nome}</Card.Title>
                </Card.Body>
              </Card>
              </Link>
            </Col>
          )
        })}

      </Row>

    </Pagina>
  )
}
