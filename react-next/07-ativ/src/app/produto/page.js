'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card, Col, Row, Carousel } from 'react-bootstrap'
import Pagina from '../components/Pagina'

export default function page() {

  const [produto, setProduto] = useState({})

  useEffect(() => {
    buscarProduto()
  }, [])


  async function buscarProduto() {
    const resultado = await axios.get('https://dummyjson.com/products/121')
    console.log(resultado.data)
    setProduto(resultado.data)
  }




  return (
    <Pagina titulo={produto.title}>

      {(produto.id) && (
        <>
          <Row>
            <Col md={6}>
              <Card className="mb-3 shadow-sm">
                <Carousel data-bs-theme="dark">
                  {produto.images.map((imagem, indice) => (
                    <Carousel.Item key={indice}>
                      <Card.Img variant="top" src={imagem} height={500} />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Card.Body>
                  <Card.Title className="fw-bold">{produto.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {produto.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <h1 className="display-6">Detalhes</h1>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                  <span>Preço:</span>
                  <span className="fw-bold">R$ {produto.price}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Desconto:</span>
                  <span className="fw-bold">{produto.discountPercentage}%</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Avaliação:</span>
                  <span className="fw-bold">{produto.rating}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Quantidade disponível:</span>
                  <span className="fw-bold">{produto.stock}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Marca:</span>
                  <span className="fw-bold">{produto.brand}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Categoria:</span>
                  <span className="fw-bold">{produto.category}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Politica de Devoluç]ao:</span>
                  <span className="fw-bold">{produto.returnPolicy}</span>
                </li>
              </ul>
              {/* acrescente as tags */}
              <h1 className="display-6">Tags</h1>
              <ul className="list-group list-group-flush">
                {produto.tags.map((tag, i) => (
                  <li key={i} className="list-group-item">
                    {tag}
                  </li>
                ))}
              </ul>
              <h1 className="display-6">QRCODE</h1>
              <Card className="mb-3 shadow-sm" style={{ width: '200px', height: '200px' }}>
                <Card.Img variant="top" src={produto.meta.qrCode} style={{ width: '100%', height: '100%' }} />
              </Card>
            </Col>
          </Row>
          <h1 className="display-6">Reviews</h1>
          <Row>
            {produto.reviews.map((review, i) => (
              <Col md={4} key={i}>
                <Card className="mb-3 shadow-sm">
                  <Card.Header>{review.reviewerName}</Card.Header>
                  <Card.Body>
                    <Card.Title className="fw-bold">Nota: {review.rating} ⭐</Card.Title>
                    <Card.Text className="text-muted">
                      {review.comment}
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Data: {new Date(review.date).toLocaleString()}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}


    </Pagina>
  )
}
