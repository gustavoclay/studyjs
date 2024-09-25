'use client'

import { Container, Nav, Navbar } from 'react-bootstrap';


export default function Pagina(props) {
  return (
    <>

      {/* Barra de Navegação */}

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/copa">Copa do Mundo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/selecoes">Seleções</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Barra de Titulo */}

      <div className='text-center text-white bg-secondary py-2'>
        <h1>{props.titulo}</h1>
      </div>

      {/* Conteudo da Pagina */}

      <Container className='mt-2'>
        {props.children}
      </Container>

    </>
  )
}
