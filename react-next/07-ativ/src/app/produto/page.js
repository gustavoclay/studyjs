'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import Pagina from '../components/Pagina'
import {Row, Col, Card, Button} from 'react-bootstrap'

export default function page() {

  const [produto, setProduto] = useState({
    "id": 1,
    "title": "Essence Mascara Lash Princess",
    "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    "category": "beauty",
    "price": 9.99,
    "discountPercentage": 7.17,
    "rating": 4.94,
    "stock": 5,
    "tags": [
      "beauty",
      "mascara"
    ],
    "brand": "Essence",
    "sku": "RCH45Q1A",
    "weight": 2,
    "dimensions": {
      "width": 23.17,
      "height": 14.43,
      "depth": 28.01
    },
    "warrantyInformation": "1 month warranty",
    "shippingInformation": "Ships in 1 month",
    "availabilityStatus": "Low Stock",
    "reviews": [
      {
        "rating": 2,
        "comment": "Very unhappy with my purchase!",
        "date": "2024-05-23T08:56:21.618Z",
        "reviewerName": "John Doe",
        "reviewerEmail": "john.doe@x.dummyjson.com"
      },
      {
        "rating": 2,
        "comment": "Not as described!",
        "date": "2024-05-23T08:56:21.618Z",
        "reviewerName": "Nolan Gonzalez",
        "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
      },
      {
        "rating": 5,
        "comment": "Very satisfied!",
        "date": "2024-05-23T08:56:21.618Z",
        "reviewerName": "Scarlett Wright",
        "reviewerEmail": "scarlett.wright@x.dummyjson.com"
      }
    ],
    "returnPolicy": "30 days return policy",
    "minimumOrderQuantity": 24,
    "meta": {
      "createdAt": "2024-05-23T08:56:21.618Z",
      "updatedAt": "2024-05-23T08:56:21.618Z",
      "barcode": "9164035109868",
      "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
    },
    "images": [
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
    ],
    "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
  })

  // useEffect(() => {
  //   buscarProduto()
  // }, [])


  // async function buscarProduto() {
  //   const resultado = await axios.get('https://dummyjson.com/products/1')
  //   console.log(resultado.data)
  //   setProduto(resultado.data)
  // }




  return (
    <Pagina titulo={produto.title}>

      <Row>
        <Col md={6}>
          <Card className="mb-3 shadow-sm">
            <Card.Img variant="top" src={produto.images[0]} />
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
          {/* Acrescente a imagem do qrcode */}
          <h1 className="display-6">QRCODE</h1>
          <Card className="mb-3 shadow-sm">
            <Card.Img variant="top" src={produto.meta.qrCode} />
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

    </Pagina>
  )
}
