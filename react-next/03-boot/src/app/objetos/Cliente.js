import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Cliente({ nome, sobrenome, idade, imagem }) {
  return (
    <Card>
      <Card.Img variant="top" src={imagem}/>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><strong>{nome} {sobrenome}</strong></ListGroup.Item>
        <ListGroup.Item>{idade} anos</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}
