'use client'

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'


export default function Pagina(props) {

  const { titulo, children } = props


  return (
    <>
      {/* Barra de Navegação */}

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Formulários" id="basic-nav-dropdown">
              <NavDropdown.Item href="/formulario/nome">Nome</NavDropdown.Item>
              <NavDropdown.Item href="/formulario/imc">Calculadora de IMC</NavDropdown.Item>
              <NavDropdown.Item href="/formulario/imcformik">Calculadora de IMC - Formik</NavDropdown.Item>
              <NavDropdown.Item href="/formulario/cadastro">Cadastro de Alunos</NavDropdown.Item>
              <NavDropdown.Item href="/formulario/cadastro/lista">Lista de Alunos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/faculdades">Faculdades</Nav.Link>
            <Nav.Link href="/alunos">Alunos</Nav.Link>
            {/* <Nav.Link href="/tarefas">Lista de Tarefas</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

      {/* Barra de Titulo */}

      <div className='text-center text-white bg-secondary py-2'>
        <h1>{titulo}</h1>
      </div>

      {/* Conteudo da Pagina */}

      <Container className='mt-2'>
        {children}
      </Container>

      {/* Toast */}
      <ToastContainer />

    </>
  )
}
