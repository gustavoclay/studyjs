'use client'

import Pagina from "@/components/Pagina"
import { useState } from "react"
import { Button, Form } from "react-bootstrap"

export default function ForumarioImcPage() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [peso, setPeso] = useState('0')
  const [altura, setAltura] = useState('0.0')

  const [imc, setImc] = useState(0)

  function handleSubmit(event) {
    event.preventDefault()
    console.log({ nome, email, peso, altura })

    const pesoNumerico = Number(peso)
    const alturaNumerica = Number(altura)

    console.log("🚀 ~ handleSubmit ~ pesoNumerico:", pesoNumerico)
    console.log("🚀 ~ handleSubmit ~ alturaNumerica:", alturaNumerica)

    const imc = (pesoNumerico / (alturaNumerica * alturaNumerica)).toFixed(2)
    console.log("🚀 ~ handleSubmit ~ imc:", imc)
    setImc(imc)
  }


  return (
    <Pagina titulo="Calculadora de IMC">

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" value={nome} onChange={e => setNome(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>E-mail:</Form.Label>
          <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Peso:</Form.Label>
          <Form.Control
            type="number"
            step={1.0}
            min={1.0}
            value={peso}
            onChange={e => setPeso(e.target.value)} />
          <Form.Text>Peso em kg</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Altura:</Form.Label>
          <Form.Control
            type="number"
            step={0.01}
            min={0.01}
            value={altura}
            onChange={e => setAltura(e.target.value)} />
          <Form.Text>Altura em metros</Form.Text>
        </Form.Group>

        <Button type='submit'>Calcular</Button>

      </Form>


      <div className="mt-3">
        <h2>Resultado: </h2>
        <p>Nome: {nome}</p>
        <p>E-mail: {email}</p>
        <p>Peso: {peso}</p>
        <p>Altura: {altura}</p>
        <p>IMC: {imc}</p>
      </div>






    </Pagina>
  )
}
