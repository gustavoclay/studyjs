'use client'

import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import { useState } from "react"
import { Button, CardImg, Col, Form, Modal, Row } from 'react-bootstrap'
import { FaCheck, FaCircleArrowLeft, FaTrash } from 'react-icons/fa6'

export default function page() {

  const [showModalResultado, setShowModalResultado] = useState(false)

  const [imc, setImc] = useState(0)
  const [classificacao, setClassificacao] = useState('')


  function calcular(values) {
    console.log(values)

    const resIMC = (values.peso / (values.altura * values.altura)).toFixed(2)
    console.log("🚀 ~ calcular ~ resIMC:", resIMC)

    let resClass = ''

    if (resIMC < 18.5) {
      resClass = 'Abaixo do peso'
    } else if (resIMC >= 18.5 && resIMC < 25) {
      resClass = 'Peso normal'
    } else if (resIMC >= 25 && resIMC < 30) {
      resClass = 'Sobrepeso'
    } else if (resIMC >= 30 && resIMC < 35) {
      resClass = 'Obesidade grau 1'
    } else if (resIMC >= 35 && resIMC < 40) {
      resClass = 'Obesidade grau 2'
    } else if (resIMC >= 40) {
      resClass = 'Obesidade grau 3'
    }
    console.log("🚀 ~ calcular ~ resClass:", resClass)

    setImc(resIMC)
    setClassificacao(resClass)

    setShowModalResultado(true)
  }

  return (

    <Pagina titulo="Calculadora de IMC - Formik">

      {/* Tabela IMC */}
      <div className="text-center">
        <CardImg style={{ width: '70%' }} src="/imc.png" />
      </div>

      {/* Formulário */}
      <Formik
        initialValues={{
          nome: '',
          genero: '',
          peso: '0',
          altura: '0.0'
        }}
        onSubmit={calcular}
      >
        {({ values, handleChange, handleSubmit, handleReset }) => (
          <Form>

            <Form.Group className="mb-3">
              <Form.Label>Nome:</Form.Label>
              <Form.Control
                name="nome"
                type="text"
                value={values.nome}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Gênero:</Form.Label>
              <Form.Select
                name='genero'
                value={values.genero}
                onChange={handleChange}
              >
                <option value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Altura:</Form.Label>
              <Form.Control
                name='altura'
                type="number"
                step={0.01}
                min={0.01}
                value={values.altura}
                onChange={handleChange} />
              <Form.Text>Altura em metros ex. 1.75</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Peso:</Form.Label>
              <Form.Control
                name='peso'
                type="number"
                step={0.1}
                min={0.1}
                value={values.peso}
                onChange={handleChange} />
              <Form.Text>Altura em metros ex. 1.75</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 text-center">
              <Button onClick={handleSubmit} className='me-2'><FaCheck /> Enviar</Button>
              <Button onClick={handleReset}><FaTrash /> Reset</Button>
            </Form.Group>

          </Form>
        )}
      </Formik>

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
