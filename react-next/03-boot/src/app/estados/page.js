'use client'

import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Pagina from "../components/Pagina";

export default function page() {

  const [pokemon, setPokemon] = useState('???')
  const [contador, setContador] = useState(0)

  function alterar(pokemon) {
    setPokemon(pokemon)
  }

  function incrementar() {
    if(contador < 10){
      setContador(contador + 1)
    }
  }

  function decrementar() {
    if (contador > 0){
      setContador(contador - 1)
    }
  }

  return (
    <Pagina titulo="Controle de Estados (states)">

      <Row>
        <h2 className="text-center">O pokemon é: {pokemon}</h2>
      </Row>

      <Row>
        <Col>
          <Button
            variant="primary"
            style={{ width: '100%' }}
            onClick={() => alterar('Bulbasaur')}
          >???</Button>
        </Col>
        <Col>
          <Button
            variant="warning"
            style={{ width: '100%' }}
            onClick={() => alterar('Pikachu')}
          >???</Button>
        </Col>
        <Col>
          <Button
            variant="danger"
            style={{ width: '100%' }}
            onClick={() => alterar('Charizard')}
          >???</Button>
        </Col>
      </Row>

      <hr />

      <Row>
        <Col className="text-end">
          <Button
            variant="primary"
            style={{ width: '50%' }}
            onClick={decrementar}
          >
            -
          </Button>
        </Col>
        <Col>
          <h2 className="text-center">Contador: {contador}</h2>
        </Col>
        <Col>
          <Button
            variant="danger"
            style={{ width: '50%' }}
            onClick={incrementar}
          >
            +
          </Button>
        </Col>
      </Row>




    </Pagina>
  )
}
