'use client'

import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FaArrowLeft, FaCheck, FaTrash } from 'react-icons/fa'
import { v4 } from 'uuid'
import * as Yup from 'yup'

// Componente principal da página de cadastro de professor
export default function ProfessorFormPage(props) {

  // hook useRouter para navegação
  const route = useRouter()

  // Recupera a lista de professores do localStorage ou inicializa como um array vazio
  const professores = JSON.parse(localStorage.getItem('professores')) || []

  // Recupera a lista de cursos do localStorage
  const cursos = JSON.parse(localStorage.getItem('cursos')) || []

  // Usando as props para pegar o id do professor a ser editado
  const id = props.searchParams.id
  const professorEditado = professores.find(professor => professor.id === id)

  // Função para salvar os dados do professor
  function salvar(dados) {
    // professor editado
    if (professorEditado) {
      // troca os dados do professor editado pelos novos dados
      Object.assign(professorEditado, dados)
    } else {
      // criar um novo professor com um novo id e guarda na lista
      dados.id = v4()
      professores.push(dados)
    }

    // salva a lista de professores no localStorage e navega para a lista de professores
    localStorage.setItem('professores', JSON.stringify(professores))
    alert('Professor salvo com sucesso!')
    return route.push('/professores')

  }

  // Valores iniciais do formulário
  const initialValues = {
    nome: '',
    dataNascimento: '',
    matricula: '',
    status: '',
    curso: ''
  }

  // Esquema de validação usando Yup
  const validationSchema = Yup.object({
    nome: Yup.string().required('O nome é obrigatório'),
    dataNascimento: Yup.date()
      .required('A data de nascimento é obrigatória')
      .max(new Date(), 'A data de nascimento não pode ser no futuro'),
    matricula: Yup.string().required('A matrícula é obrigatória'),
    status: Yup.string().required('O status é obrigatório'),
    curso: Yup.string().required('O curso é obrigatório')
  })

  return (
    <Pagina titulo="Cadastro de Professor">
      <Formik
        initialValues={professorEditado || initialValues}
        validationSchema={validationSchema}
        onSubmit={salvar}
      >
        {
          ({ values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit }) => {

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
                    <Form.Label>Data de Nascimento:</Form.Label>
                    <Form.Control
                      type="date"
                      name="dataNascimento"
                      value={values.dataNascimento}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.dataNascimento && !errors.dataNascimento}
                      isInvalid={touched.dataNascimento && !!errors.dataNascimento}
                    />
                    <Form.Control.Feedback type="invalid">{errors.dataNascimento}</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Matrícula:</Form.Label>
                    <Form.Control
                      type="text"
                      name="matricula"
                      value={values.matricula}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.matricula && !errors.matricula}
                      isInvalid={touched.matricula && !!errors.matricula}
                    />
                    <Form.Control.Feedback type="invalid">{errors.matricula}</Form.Control.Feedback>
                  </Form.Group>

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
                </Row>

                <Row className="mb-3">
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
                  <Form.Group as={Col} className="mb-3">
                    <Button variant="secondary" className="me-2" onClick={() => route.push('/professores')}><FaArrowLeft /> Voltar</Button>
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
