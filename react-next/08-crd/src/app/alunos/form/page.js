'use client'

import Pagina from "@/components/Pagina";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button, Col, Form, Row } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { FaCheck, FaTrash } from "react-icons/fa6";
import ReactInputMask from "react-input-mask";
import { v4 } from 'uuid';
import * as Yup from 'yup';

export default function AlunosForm(props) {

  const route = useRouter()

  const [cursosFiltrados, setCursosFiltrados] = useState([])

  const alunos = JSON.parse(localStorage.getItem('alunos')) || []
  const faculdades = JSON.parse(localStorage.getItem('faculdades')) || []
  const cursos = JSON.parse(localStorage.getItem('cursos')) || []

  // Usando as props para pegar o id do curso a ser editado
  const id = props.searchParams.id
  const alunoEditado = alunos.find(aluno => aluno.id === id)

  const initialValues = {
    nome: '',
    sobrenome: '',
    email: '',
    dataNascimento: '',
    telefone: '',
    faculdade: '',
    curso: '',
    periodo: '',
    matricula: '',
    foto: ''
  }

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required('Nome é obrigatório'),
    sobrenome: Yup.string().required('Sobrenome é obrigatório'),
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    dataNascimento: Yup.date()
      .required('A data de nascimento é obrigatória')
      .max(new Date(), 'A data de nascimento não pode ser no futuro'),
    telefone: Yup.string().required('Telefone é obrigatório'),
    faculdade: Yup.string().required('Faculdade é obrigatória'),
    curso: Yup.string().required('Curso é obrigatório'),
    periodo: Yup.string().required('Período é obrigatório'),
    matricula: Yup.string().required('Matrícula é obrigatória'),
    foto: Yup.string()
  })


  // Função para salvar os dados do aluno
  function salvar(dados) {
    // aluno editado
    if (alunoEditado) {
      // troca os dados do curso editado pelos novos dados
      Object.assign(alunoEditado, dados)
    } else {
      // criar um novo curso com um novo id e guarda na lista
      dados.id = v4()
      alunos.push(dados)
    }

    // salva a lista de alunos no localStorage e navega para a lista de alunos
    localStorage.setItem('alunos', JSON.stringify(alunos))
    alert('Aluno salvo com sucesso!')
    return route.push('/alunos')

  }

  return (
    <Pagina titulo="Cadastro de Aluno">

      <Formik
        initialValues={alunoEditado || initialValues}
        validationSchema={validationSchema}
        onSubmit={salvar}
      >
        {({ values, handleReset, handleSubmit, handleChange, handleBlur, touched, errors }) => {

          // console.log({ values, errors, touched })

          useEffect(() => {
            if (values.faculdade !== '') {
              setCursosFiltrados(cursos.filter(curso => curso.faculdade === values.faculdade))
            }
          }, [values.faculdade])


          return (
            <Form onSubmit={handleSubmit}>

              <h3 className="text-center">Dados Pessoais</h3>
              <hr />

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Nome</Form.Label>
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
                  <Form.Label>Sobrenome</Form.Label>
                  <Form.Control
                    type="text"
                    name="sobrenome"
                    value={values.sobrenome}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.sobrenome && !errors.sobrenome}
                    isInvalid={touched.sobrenome && !!errors.sobrenome}
                  />
                  <Form.Control.Feedback type="invalid">{errors.sobrenome}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.email && !errors.email}
                    isInvalid={touched.email && !!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Data de Nascimento</Form.Label>
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
                <Form.Group as={Col} md={6}>
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control as={ReactInputMask}
                    mask={"(99)99999-9999"}
                    placeholder="(00)00000-0000"
                    type="text"
                    name="telefone"
                    value={values.telefone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.telefone && !errors.telefone}
                    isInvalid={touched.telefone && !!errors.telefone}
                  />
                  <Form.Control.Feedback type="invalid">{errors.telefone}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <h3 className="text-center">Acadêmico</h3>
              <hr />

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Faculdade</Form.Label>
                  <Form.Control
                    as="select"
                    name="faculdade"
                    value={values.faculdade}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.faculdade && !errors.faculdade}
                    isInvalid={touched.faculdade && !!errors.faculdade}
                  >
                    <option value="">Selecione</option>
                    {faculdades.map(faculdade => <option key={faculdade.id} value={faculdade.id}>{faculdade.nome}</option>)}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">{errors.faculdade}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Curso</Form.Label>
                  <Form.Control
                    as="select"
                    name="curso"
                    value={values.curso}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={values.faculdade === ''}
                    isValid={touched.curso && !errors.curso}
                    isInvalid={touched.curso && !!errors.curso}
                  >
                    <option value="">Selecione</option>
                    {cursosFiltrados.map(curso => <option value={curso.id}>{curso.nome}</option>)}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">{errors.curso}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Período</Form.Label>
                  <Form.Control
                    as="select"
                    name="periodo"
                    value={values.periodo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.periodo && !errors.periodo}
                    isInvalid={touched.periodo && !!errors.periodo}
                  >
                    <option value="">Selecione</option>
                    <option value="matutino">Matutino</option>
                    <option value="vespertino">Vespertino</option>
                    <option value="noturno">Noturno</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">{errors.periodo}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md={4}>
                  <Form.Label>Matrícula</Form.Label>
                  <Form.Control as={ReactInputMask}
                    mask={"999999"}
                    placeholder="000000"
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

                <Form.Group as={Col} md={8}>
                  <Form.Label>Foto</Form.Label>
                  <Form.Control
                    type="text"
                    name="foto"
                    value={values.foto}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.foto && !errors.foto}
                    isInvalid={touched.foto && !!errors.foto}
                  />
                  <Form.Control.Feedback type="invalid">{errors.foto}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Form.Group className="mb-3 text-end">
                <Button type="button" variant="secondary" className="me-2" onClick={() => route.push('/alunos')}><FaArrowLeft /> Voltar</Button>
                <Button type="button" className="me-2" onClick={handleReset}><FaTrash /> Limpar</Button>
                <Button type="submit" variant="success"><FaCheck /> Salvar</Button>
                {/* <Button variant="success" onClick={() => console.log({ values, errors, touched })}><FaCheck /> Teste</Button> */}
              </Form.Group>

            </Form>
          )
        }
        }

      </Formik>

    </Pagina>
  )
}
