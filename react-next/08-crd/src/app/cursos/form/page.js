'use client'

import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FaArrowLeft, FaCheck, FaTrash } from 'react-icons/fa'
import { v4 } from 'uuid'
import * as Yup from 'yup'

// Componente principal da página de cadastro de curso
export default function CursoFormPage(props) {

  // hook useRouter para navegação
  const route = useRouter()

  // Recupera a lista de cursos do localStorage ou inicializa como um array vazio
  const cursos = JSON.parse(localStorage.getItem('cursos')) || []

  // Recupera a lista de faculdades do localStorage
  const faculdades = JSON.parse(localStorage.getItem('faculdades')) || []

  // Lista de áreas de estudo
  const areasDeEstudo = [
    'Ciências Exatas',
    'Ciências Humanas',
    'Ciências Biológicas',
    'Engenharia',
    'Tecnologia da Informação',
    'Artes',
    'Negócios',
    'Direito'
  ]

  // Usando as props para pegar o id do curso a ser editado
  const id = props.searchParams.id
  const cursoEditado = cursos.find(curso => curso.id === id)

  // Função para salvar os dados do curso
  function salvar(dados) {
    // curso editado
    if (cursoEditado) {
      // troca os dados do curso editado pelos novos dados
      Object.assign(cursoEditado, dados)
    } else {
      // criar um novo curso com um novo id e guarda na lista
      dados.id = v4()
      cursos.push(dados)
    }

    // salva a lista de cursos no localStorage e navega para a lista de cursos
    localStorage.setItem('cursos', JSON.stringify(cursos))
    alert('Curso salvo com sucesso!')
    return route.push('/cursos')

  }

  // Valores iniciais do formulário
  const initialValues = {
    nome: '',
    descricao: '',
    area: '',
    nota: '',
    status: '',
    faculdade: ''
  }

  // Esquema de validação usando Yup
  const validationSchema = Yup.object({
    nome: Yup.string().required('O nome é obrigatório'),
    descricao: Yup.string().required('A descrição é obrigatória'),
    area: Yup.string().required('A área é obrigatória'),
    nota: Yup.number().required('A nota é obrigatória').min(1).max(5),
    status: Yup.string().required('O status é obrigatório'),
    faculdade: Yup.string().required('A faculdade é obrigatória')
  })

  return (
    <Pagina titulo="Cadastro de Curso">
      <Formik
        initialValues={cursoEditado || initialValues}
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
                    <Form.Label>Área:</Form.Label>
                    <Form.Select
                      name="area"
                      value={values.area}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.area && !errors.area}
                      isInvalid={touched.area && !!errors.area}
                    >
                      <option value="">Selecione...</option>
                      {areasDeEstudo.map(area => <option key={area} value={area}>{area}</option>)}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">{errors.area}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Nota:</Form.Label>
                    <Form.Select
                      name="nota"
                      value={values.nota}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.nota && !errors.nota}
                      isInvalid={touched.nota && !!errors.nota}
                    >
                      <option value="">Selecione...</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">{errors.nota}</Form.Control.Feedback>
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
                    <Form.Label>Faculdade:</Form.Label>
                    <Form.Select
                      name="faculdade"
                      value={values.faculdade}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.faculdade && !errors.faculdade}
                      isInvalid={touched.faculdade && !!errors.faculdade}
                    >
                      <option value="">Selecione...</option>
                      {faculdades.map(faculdade => <option key={faculdade.id} value={faculdade.id}>{faculdade.nome}</option>)}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">{errors.faculdade}</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} className="mb-3">
                    <Button variant="secondary" className="me-2" onClick={() => route.push('/cursos')}><FaArrowLeft /> Voltar</Button>
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
