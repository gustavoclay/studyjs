'use client'

import Pagina from '@/components/Pagina'
import apiLocalidades from '@/services/apiLocalidades'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FaArrowLeft, FaCheck, FaTrash } from 'react-icons/fa'
import { v4 } from 'uuid'
import * as Yup from 'yup'

export default function FaculdadePage(props) {

  const route = useRouter()

  const faculdades = JSON.parse(localStorage.getItem('faculdades')) || []

  // usando o hook useSearchParams para pegar o id da faculdade
  // const id = useSearchParams().get('id')

  // usando as props para pegar o id da faculdade
  const id = props.searchParams.id
  const faculdadeEditada = faculdades.find(faculdade => faculdade.id === id)


  const [paises, setPaises] = useState([])
  const [estados, setEstados] = useState([])
  const [cidades, setCidades] = useState([])

  useEffect(() => {
    carregarDados()
    console.log('id >>> ', id)
    console.log('faculdadeEditada >>> ', faculdadeEditada)
  }, [])


  function carregarDados() {

    apiLocalidades.get('/paises').then(response => {
      console.log('buscar paises >>> ', response.data)
      setPaises(response.data)
    })

    apiLocalidades.get('/estados?orderBy=nome').then(response => {
      console.log('buscar estados >>> ', response.data)
      setEstados(response.data)
    })

  }

  function salvar(dados) {

    if (faculdadeEditada) {
      Object.assign(faculdadeEditada, dados)
    } else {
      dados.id = v4()
      faculdades.push(dados)
    }

    localStorage.setItem('faculdades', JSON.stringify(faculdades))
    alert('Faculdade salva com sucesso!')
    return route.push('/faculdades')

  }

  const initialValues = {
    nome: '',
    pais: '',
    estado: '',
    cidade: '',
    endereco: ''
  }

  const validationSchema = Yup.object({
    nome: Yup.string().required('O nome é obrigatório'),
    pais: Yup.string().required('O país é obrigatório'),
    estado: Yup.string().when('pais', {
      is: (value) => value === 'Brasil',
      then: () => Yup.string().required('O estado é obrigatório'),
      otherwise: () => Yup.string()
    }),
    cidade: Yup.string().when('pais', {
      is: (value) => value === 'Brasil',
      then: () => Yup.string().required('A cidade é obrigatória'),
      otherwise: () => Yup.string()
    }),
    endereco: Yup.string().required('O endereço é obrigatório')
  })


  return (
    <Pagina titulo="Cadastro de Faculdade">
      <Formik
        initialValues={faculdadeEditada || initialValues}
        validationSchema={validationSchema}
        onSubmit={salvar}
      >
        {
          ({ values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit }) => {

            // debug
            // console.log('Formik Debug >>>')
            // console.log('values', values)
            // console.log('errors', errors)
            // console.log('touched', touched)


            // ações do formulário
            useEffect(() => {
              console.log('Mexeu no estado >>>', values.estado)
              if (values.estado !== '') {
                apiLocalidades.get(`/estados/${values.estado}/municipios`).then(response => {
                  console.log('buscar cidades >>> ', response.data)
                  setCidades(response.data)
                })
              }
            }, [values.estado])

            // form
            return (
              <Form>

                <Row className="mb-3">

                  <Form.Group as={Col}>
                    <Form.Label>País:</Form.Label>
                    <Form.Select
                      name="pais"
                      value={values.pais}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.pais && !errors.pais}
                      isInvalid={touched.pais && !!errors.pais}
                    >
                      <option value="">Selecione...</option>
                      {paises.map(pais => <option key={pais.nome} value={pais.nome}>{pais.nome}</option>)}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">{errors.pais}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Estado:</Form.Label>
                    <Form.Select
                      name="estado"
                      disabled={values.pais !== 'Brasil'}
                      value={values.estado}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.estado && !errors.estado}
                      isInvalid={touched.estado && !!errors.estado}
                    >
                      <option value="">Selecione...</option>
                      {estados.map(uf => <option key={uf.sigla} value={uf.sigla}>{uf.sigla}</option>)}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">{errors.estado}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Cidade:</Form.Label>
                    <Form.Select
                      name="cidade"
                      disabled={values.estado === ''}
                      value={values.cidade}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.cidade && !errors.cidade}
                      isInvalid={touched.cidade && !!errors.cidade}
                    >
                      <option value="">Selecione...</option>
                      {cidades.map(cidade => <option key={cidade.nome} value={cidade.nome}>{cidade.nome}</option>)}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">{errors.cidade}</Form.Control.Feedback>
                  </Form.Group>

                </Row>

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
                    <Form.Label>Endereço:</Form.Label>
                    <Form.Control
                      type="text"
                      name="endereco"
                      value={values.endereco}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.endereco && !errors.endereco}
                      isInvalid={touched.endereco && !!errors.endereco}
                    />
                    <Form.Control.Feedback type="invalid">{errors.endereco}</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} className="mb-3">
                    <Button variant="secondary" className="me-2" onClick={() => route.push('/faculdades')}><FaArrowLeft /> Voltar</Button>
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
