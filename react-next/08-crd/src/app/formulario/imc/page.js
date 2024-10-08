'use client'

import Pagina from "@/components/Pagina";
import { useState } from "react";
import { Button, CardImg, Col, Form, Modal, Row, Toast } from "react-bootstrap";
import { FaArrowRotateLeft, FaCheck, FaCircleArrowLeft } from "react-icons/fa6";

export default function ForumarioImcPage() {

  const [showModalResultado, setShowModalResultado] = useState(false)
  const [showToast, setShowToast] = useState(true)

  const [nome, setNome] = useState('')
  const [genero, setGenero] = useState('')
  const [peso, setPeso] = useState('0')
  const [altura, setAltura] = useState('0.0')
  const [imc, setImc] = useState(0)
  const [classificacao, setClassificacao] = useState('')

  function handleReset() {
    setNome('')
    setGenero('')
    setPeso('0')
    setAltura('0.0')
    setImc(0)
  }

  function handleSubmit(event) {
    event.preventDefault()

    setShowModalResultado(true)

    console.log({ nome, genero, peso, altura })

    const pesoNumerico = Number(peso)
    const alturaNumerica = Number(altura)

    const imc = (pesoNumerico / (alturaNumerica * alturaNumerica)).toFixed(2)
    setImc(imc)

    if (imc < 18.5) {
      setClassificacao('Abaixo do peso')
    } else if (imc >= 18.5 && imc < 25) {
      setClassificacao('Peso normal')
    } else if (imc >= 25 && imc < 30) {
      setClassificacao('Sobrepeso')
    } else if (imc >= 30 && imc < 35) {
      setClassificacao('Obesidade grau 1')
    } else if (imc >= 35 && imc < 40) {
      setClassificacao('Obesidade grau 2')
    } else if (imc >= 40) {
      setClassificacao('Obesidade grau 3')
    }

  }


  return (
    <Pagina titulo="Calculadora de IMC">
      <div className="text-center">
        <CardImg style={{ width: '70%' }} src="/imc.png" />
      </div>

      {/* Formulário */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" value={nome} onChange={e => setNome(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>E-mail:</Form.Label>
          <Form.Select value={genero} onChange={e => setGenero(e.target.value)}>
            <option value="">Selecione</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Peso:</Form.Label>
          <Form.Control
            type="number"
            step={1.0}
            min={1.0}
            value={peso}
            onChange={e => setPeso(e.target.value)} />
          <Form.Text>Peso em kg. ex. 80</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Altura:</Form.Label>
          <Form.Control
            type="number"
            step={0.01}
            min={0.01}
            value={altura}
            onChange={e => setAltura(e.target.value)} />
          <Form.Text>Altura em metros ex. 1.75</Form.Text>
        </Form.Group>

        <Form.Group className="text-center">
          <Button onClick={handleReset} className="me-2">
            <FaArrowRotateLeft /> Limpar
          </Button>
          <Button type='submit' variant="success">
            <FaCheck /> Calcular
          </Button>
        </Form.Group>
      </Form>

      {/* Modal Resultado */}
      <Modal
        show={showModalResultado}
        onHide={() => setShowModalResultado(false)}
        centered
      >
        <Modal.Header >
          <Modal.Title>Resultado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <p><b>Nome:</b> {nome}</p>
              <p><b>Gênero: </b>{genero}</p>
              <p><b>Peso: </b>{peso}</p>
              <p><b>Altura:</b> {altura}</p>
            </Col>
            <Col>
              <p><b>IMC Calculado:</b> {imc}</p>
              <p><b>Classificação:</b> {classificacao}</p>

            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalResultado(false)}>
            <FaCircleArrowLeft /> voltar
          </Button>
        </Modal.Footer>
      </Modal>

      <div style={{ paddingBottom: '100px' }}></div>


    </Pagina>
  )
}
