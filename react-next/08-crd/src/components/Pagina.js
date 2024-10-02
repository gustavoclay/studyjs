'use client'

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'


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
              <NavDropdown.Item href="/formulario/imc">Nome</NavDropdown.Item>
            </NavDropdown>
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

    </>
  )
}
