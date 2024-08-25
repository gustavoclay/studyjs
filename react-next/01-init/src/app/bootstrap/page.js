'use client'

import { Col, Container, Row, Card, Button } from "react-bootstrap";

export default function page() {
  return (
    <Container>
      <Row>
        <h1 className="text-center">Bootstrap</h1>
      </Row>
      <Row>
        <Col>
          <Card
            bg={'Danger'}
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      <Col>

          <Button variant="primary" onClick={() => console.log('clicked')}>Primary</Button>

      </Col>

      </Row>




    </Container>
  )
}
