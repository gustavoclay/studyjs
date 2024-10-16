'use client'

import Pagina from "@/components/Pagina";
import { Formik } from "formik";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaCheck, FaTrash } from "react-icons/fa6";
import ReactInputMask from "react-input-mask";
import { v4 as uuid } from 'uuid';
import * as Yup from 'yup';

export default function CadastroPage() {


  function cadastrar(values) {
    // criar um novo aluno com os dados do formulário
    const aluno = values

    // gerar um id único para o aluno
    aluno.id = uuid()
    console.log("🚀 ~ cadastrar ~ aluno:", aluno)

    // buscar os alunos do localStorage
    const alunos = JSON.parse(localStorage.getItem('alunos')) || '[]'

    // adicionar o novo aluno na lista
    alunos.push(aluno)

    // salvar a lista de alunos no localStorage
    localStorage.setItem('alunos', JSON.stringify(alunos))

    alert('Aluno cadastrado com sucesso!')

  }


  const initialValues = {
    nome: '',
    sobrenome: '',
    email: '',
    dataNascimento: '',
    telefone: '',
    endereco: {
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      cidade: '',
      estado: '',
      UF: ''
    },
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
    dataNascimento: Yup.date().nullable().typeError('Data inválida').required('Data de nascimento é obrigatória'),
    telefone: Yup.string().required('Telefone é obrigatório'),
    endereco: Yup.object().shape({
      cep: Yup.string().required('CEP é obrigatório'),
      logradouro: Yup.string().required('Logradouro é obrigatório'),
      numero: Yup.string().required('Número é obrigatório'),
      complemento: Yup.string().required('Complemento é obrigatório'),
      cidade: Yup.string().required('Cidade é obrigatória'),
      estado: Yup.string().required('Estado é obrigatório'),
      UF: Yup.string().required('UF é obrigatório')
    }),
    faculdade: Yup.string().required('Faculdade é obrigatória'),
    curso: Yup.string().required('Curso é obrigatório'),
    periodo: Yup.string().required('Período é obrigatório'),
    matricula: Yup.string().required('Matrícula é obrigatória'),
    foto: Yup.string()
  })

  return (
    <Pagina titulo={"Cadastro de Aluno"}>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={cadastrar}
      >
        {({ values, handleReset, handleSubmit, handleChange, handleBlur, touched, errors }) => (
          <Form onSubmit={handleSubmit}>

            <h3 className="text-center">Dados Pessoais</h3>
            <hr />

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
                <Form.Label>Sobrenome:</Form.Label>
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
                <Form.Label>Email:</Form.Label>
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
              <Form.Group as={Col} md={6}>
                <Form.Label>Telefone:</Form.Label>
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

            <h3 className="text-center">Endereço</h3>
            <hr />

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>CEP:</Form.Label>
                <Form.Control as={ReactInputMask}
                  mask={"99999-999"}
                  placeholder="00000-000"
                  type="text"
                  name="endereco.cep"
                  value={values.endereco.cep}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.endereco?.cep && !errors.endereco?.cep}
                  isInvalid={touched.endereco?.cep && !!errors.endereco?.cep}
                />
                <Form.Control.Feedback type="invalid">{errors.endereco?.cep}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Logradouro:</Form.Label>
                <Form.Control
                  type="text"
                  name="endereco.logradouro"
                  value={values.endereco.logradouro}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.endereco?.logradouro && !errors.endereco?.logradouro}
                  isInvalid={touched.endereco?.logradouro && !!errors.endereco?.logradouro}
                />
                <Form.Control.Feedback type="invalid">{errors.endereco?.logradouro}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Número:</Form.Label>
                <Form.Control
                  type="text"
                  name="endereco.numero"
                  value={values.endereco.numero}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.endereco?.numero && !errors.endereco?.numero}
                  isInvalid={touched.endereco?.numero && !!errors.endereco?.numero}
                />
                <Form.Control.Feedback type="invalid">{errors.endereco?.numero}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Complemento:</Form.Label>
                <Form.Control
                  type="text"
                  name="endereco.complemento"
                  value={values.endereco.complemento}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.endereco?.complemento && !errors.endereco?.complemento}
                  isInvalid={touched.endereco?.complemento && !!errors.endereco?.complemento}
                />
                <Form.Control.Feedback type="invalid">{errors.endereco?.complemento}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Cidade:</Form.Label>
                <Form.Control
                  type="text"
                  name="endereco.cidade"
                  value={values.endereco.cidade}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.endereco?.cidade && !errors.endereco?.cidade}
                  isInvalid={touched.endereco?.cidade && !!errors.endereco?.cidade}
                />
                <Form.Control.Feedback type="invalid">{errors.endereco?.cidade}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Estado:</Form.Label>
                <Form.Control
                  type="text"
                  name="endereco.estado"
                  value={values.endereco.estado}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.endereco?.estado && !errors.endereco?.estado}
                  isInvalid={touched.endereco?.estado && !!errors.endereco?.estado}
                />
                <Form.Control.Feedback type="invalid">{errors.endereco?.estado}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>UF:</Form.Label>
                <Form.Control
                  type="text"
                  name="endereco.UF"
                  value={values.endereco.UF}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.endereco?.UF && !errors.endereco?.UF}
                  isInvalid={touched.endereco?.UF && !!errors.endereco?.UF}
                />
                <Form.Control.Feedback type="invalid">{errors.endereco?.UF}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <h3 className="text-center">Acadêmico</h3>
            <hr />

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Faculdade:</Form.Label>
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
                  <option value="IESB SUL">IESB Sul</option>
                  <option value="IESB NORTE">IESB Norte</option>
                  <option value="IESB OESTE">IESB Oeste</option>
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
                  isValid={touched.curso && !errors.curso}
                  isInvalid={touched.curso && !!errors.curso}
                >
                  <option value="">Selecione</option>
                  <option value="Análise e Desenvolvimento de Sistemas">Análise e Desenvolvimento de Sistemas</option>
                  <option value="Enfermagem">Enfermagem</option>
                  <option value="Jogos Digitais">Jogos Digitais</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">{errors.curso}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Período:</Form.Label>
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
              <Form.Group as={Col} md={3}>
                <Form.Label>Matrícula:</Form.Label>
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

              <Form.Group as={Col}>
                <Form.Label>Link da Foto:</Form.Label>
                <Form.Control
                  type="link"
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
              <Button type="button" className="me-2" onClick={handleReset}><FaTrash /> Limpar</Button>
              <Button type="submit" variant="success"><FaCheck />Salvar</Button>
            </Form.Group>

          </Form>
        )}

      </Formik>

    </Pagina>
  )
}
