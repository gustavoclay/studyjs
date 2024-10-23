'use client'

import { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Pagina from "../components/Pagina";

export default function Home() {
  const [counts, setCounts] = useState({
    faculdades: 0,
    cursos: 0,
    disciplinas: 0,
    professores: 0,
    alunos: 0,
  });

  useEffect(() => {
    setCounts({
      faculdades: JSON.parse(localStorage.getItem('faculdades'))?.length || 0,
      cursos: JSON.parse(localStorage.getItem('cursos'))?.length || 0,
      disciplinas: JSON.parse(localStorage.getItem('disciplinas'))?.length || 0,
      professores: JSON.parse(localStorage.getItem('professores'))?.length || 0,
      alunos: JSON.parse(localStorage.getItem('alunos'))?.length || 0,
    });
  }, []);

  const cards = [
    { title: 'Faculdades', image: 'https://i.pinimg.com/564x/7e/d1/c4/7ed1c4cbcbcd25bff099ea0018279f5d.jpg', count: counts.faculdades, link: '/faculdades' },
    { title: 'Cursos', image: 'https://i.pinimg.com/564x/46/80/92/46809279d354a864072b934a0092d600.jpg', count: counts.cursos, link: '/cursos' },
    { title: 'Disciplinas', image: 'https://i.pinimg.com/564x/5c/3c/fd/5c3cfdc71dbec140c0b0130cf57f4bf6.jpg', count: counts.disciplinas, link: '/disciplinas' },
    { title: 'Professores', image: 'https://i.pinimg.com/564x/c7/6f/9e/c76f9e9851d0fdaaa1b2fd6dd4fddb41.jpg', count: counts.professores, link: '/professores' },
    { title: 'Alunos', image: 'https://i.pinimg.com/564x/36/65/8d/36658d65859e52266397db2194002f56.jpg', count: counts.alunos, link: '/alunos' },
  ];

  return (
    <Pagina titulo="IESB">
      <Row>
        {cards.map((card, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                  Quantidade de cadastros: {card.count}
                </Card.Text>
              </Card.Body>
              <Card.Footer className='text-end'>
                <Button variant="primary" href={card.link}>Ver Lista</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina>
  );
}
