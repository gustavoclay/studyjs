'use client'

import { Button, Form } from 'react-bootstrap'
import Pagina from '../../../components/Pagina'
import { useState } from 'react'

export default function FormularioNomePage() {

  const [nome, setNome] = useState('')
  const [inputNome, setInputNome] = useState('teste')

  function handleNome(event) {
    console.log(event.target.value)
    setInputNome(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setNome(inputNome)
  }

  return (
    <Pagina titulo="Formulário">

      <h1>O nome é: {nome}</h1>


      <Form onSubmit={handleSubmit}>

        <Form.Group>
          <Form.Label>Nome:</Form.Label>
          <Form.Control name='nome' type='text' value={inputNome} onChange={handleNome} />
          <Form.Text>Informe o seu nome</Form.Text>
        </Form.Group>

        <Button type='submit'>
          Enviar
        </Button>

      </Form>


    </Pagina>
  )

}
