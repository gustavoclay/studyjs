'use client'

import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FaArrowLeft, FaCheck, FaTrash } from 'react-icons/fa'
import { v4 } from 'uuid'
import * as Yup from 'yup'

// Componente principal da página de cadastro de disciplina
export default function DisciplinaFormPage(props) {

  // hook useRouter para navegação
  const route = useRouter()

  // Recupera a lista de disciplinas do localStorage ou inicializa como um array vazio
  const disciplinas = JSON.parse(localStorage.getItem('disciplinas')) || []

  // Recupera a lista de cursos e professores do localStorage
  const cursos = JSON.parse(localStorage.getItem('cursos')) || []
  const professores = JSON.parse(localStorage.getItem('professores')) || []

  // Usando as props para pegar o id da disciplina a ser editada
  const id = props.searchParams.id
  const disciplinaEditada = disciplinas.find(disciplina => disciplina.id === id)

  // Estado para armazenar os professores filtrados pelo curso selecionado
  const [professoresFiltrados, setProfessoresFiltrados] = useState([])

  // Função para salvar os dados da disciplina
  function salvar(dados) {
    // disciplina editada
    if (disciplinaEditada) {
      // troca os dados da disciplina editada pelos novos dados
      Object.assign(disciplinaEditada, dados)
    } else {
      // criar uma nova disciplina com um novo id e guarda na lista
      dados.id = v4()
      disciplinas.push(dados)
    }

    // salva a lista de disciplinas no localStorage e navega para a lista de disciplinas
    localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
    alert('Disciplina salva com sucesso!')
    return route.push('/faculdades')
  }

  // Valores iniciais do formulário
  const initialValues = {
    nome: '',
    descricao: '',
    status: '',
    curso: '',
    professor: ''
  }

  // Esquema de validação usando Yup
  const validationSchema = Yup.object({
    nome: Yup.string().required('O nome é obrigatório'),
    descricao: Yup.string().required('A descrição é obrigatória'),
    status: Yup.string().required('O status é obrigatório'),
    curso: Yup.string().required('O curso é obrigatório'),
    professor: Yup.string().required('O professor é obrigatório')
  })

  return (
    <Pagina titulo="Cadastro de Disciplina">
      <Formik
        initialValues={disciplinaEditada || initialValues}
        validationSchema={validationSchema}
        onSubmit={salvar}
      >
        {
          ({ values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit }) => {

            useEffect(() => {
              if (values.curso) {
                const professoresDoCurso = professores.filter(professor => professor.curso === values.curso)
                setProfessoresFiltrados(professoresDoCurso)
              }
            }, [values.curso])

            // formulário
            return (
              <Form>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control
                      type="text"
                      name="nome"
                      value={values.nome}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.nome && !errors.nome}
                      isInvalid={touched.nome && !!errors.nome}
                    />
                    <Form.Control.Feedback type="invalid">{errors.nome}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Descrição:</Form.Label>
                    <Form.Control
                      type="text"
                      name="descricao"
                      value={values.descricao}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.descricao && !errors.descricao}
                      isInvalid={touched.descricao && !!errors.descricao}
                    />
                    <Form.Control.Feedback type="invalid">{errors.descricao}</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Status:</Form.Label>
                    <Form.Select
                      name="status"
                      value={values.status}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.status && !errors.status}
                      isInvalid={touched.status && !!errors.status}
                    >
                      <option value="">Selecione...</option>
                      <option value="ativo">Ativo</option>
                      <option value="inativo">Inativo</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">{errors.status}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Curso:</Form.Label>
                    <Form.Select
                      name="curso"
                      value={values.curso}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.curso && !errors.curso}
                      isInvalid={touched.curso && !!errors.curso}
                    >
                      <option value="">Selecione...</option>
                      {cursos.map(curso => <option key={curso.id} value={curso.id}>{curso.nome}</option>)}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">{errors.curso}</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Professor:</Form.Label>
                    <Form.Select
                      name="professor"
                      value={values.professor}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={values.curso === ''}
                      isValid={touched.professor && !errors.professor}
                      isInvalid={touched.professor && !!errors.professor}
                    >
                      <option value="">Selecione...</option>
                      {professoresFiltrados.map(professor => <option value={professor.id}>{professor.nome}</option>)}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">{errors.professor}</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} className="mb-3">
                    <Button variant="secondary" className="me-2" onClick={() => route.push('/disciplinas')}><FaArrowLeft /> Voltar</Button>
                  </Form.Group>

                  <Form.Group as={Col} className='text-end'>
                    <Button className="me-2" onClick={handleReset}><FaTrash /> Limpar</Button>
                    <Button variant="success" onClick={handleSubmit}><FaCheck /> Salvar</Button>
                  </Form.Group>
                </Row>

              </Form>
            )
          }
        }
      </Formik>
    </Pagina>
  )
}
