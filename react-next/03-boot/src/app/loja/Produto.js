import { Card, CardHeader, Carousel, Image, ListGroup } from "react-bootstrap"

export default function Produto(props) {

  const { title, price, rating, images } = props.produto


  return (
    <Card>
      <CardHeader>
        <Card.Title className="text-center">{title}</Card.Title>
      </CardHeader>
      <Card.Body>
        <Carousel data-bs-theme="dark">
          {images.map(imagem => {
            return (
              <Carousel.Item>
                <Image src={imagem} height={200} />
              </Carousel.Item>
            )
          })}
        </Carousel>

      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><strong>Preço: $ {price}</strong></ListGroup.Item>
        <ListGroup.Item>Avaliação: {rating} ⭐</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}
