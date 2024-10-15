'use client'

import Pagina from "@/components/Pagina"
import { useEffect, useState } from "react"
import { Button, Form, Modal, Table } from "react-bootstrap"
import { FaEdit, FaPen, FaPlusCircle, FaTrash } from "react-icons/fa"

export default function TarefasPage() {
  const [tarefas, setTarefas] = useState([])
  const [novaTarefa, setNovaTarefa] = useState("")
  const [show, setShow] = useState(false)
  const [editIndex, setEditIndex] = useState(null)

  useEffect(() => {
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || []
    setTarefas(tarefasSalvas)
  }, [])

  const handleClose = () => {
    setShow(false)
    setNovaTarefa("")
    setEditIndex(null)
  }
  const handleShow = () => setShow(true)

  const adicionarTarefa = () => {
    const novasTarefas = [...tarefas, novaTarefa]
    setTarefas(novasTarefas)
    localStorage.setItem("tarefas", JSON.stringify(novasTarefas))
    setNovaTarefa("")
    handleClose()
  }

  const editarTarefa = () => {
    const novasTarefas = tarefas.map((tarefa, index) =>
      index === editIndex ? novaTarefa : tarefa
    )
    setTarefas(novasTarefas)
    localStorage.setItem("tarefas", JSON.stringify(novasTarefas))
    setNovaTarefa("")
    setEditIndex(null)
    handleClose()
  }

  const removerTarefa = (index) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index)
    setTarefas(novasTarefas)
    localStorage.setItem("tarefas", JSON.stringify(novasTarefas))
  }

  const iniciarEdicaoTarefa = (index) => {
    setNovaTarefa(tarefas[index])
    setEditIndex(index)
    handleShow()
  }

  const handleSave = () => {
    if (editIndex !== null) {
      editarTarefa()
    } else {
      adicionarTarefa()
    }
  }

  return (
    <Pagina titulo={"Tarefas"}>
      <Button variant="primary" onClick={handleShow}>
        <FaPlusCircle /> Adicionar Tarefa
      </Button>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Tarefa</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{tarefa}</td>
              <td className='text-center'>
                <Button variant="warning" onClick={() => iniciarEdicaoTarefa(index)} className="me-2">
                  <FaPen />
                </Button>
                <Button variant="danger" onClick={() => removerTarefa(index)}>
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex !== null ? "Editar Tarefa" : "Adicionar Tarefa"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Tarefa</Form.Label>
              <Form.Control
                type="text"
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {"Salvar Tarefa"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Pagina>
  )
}
