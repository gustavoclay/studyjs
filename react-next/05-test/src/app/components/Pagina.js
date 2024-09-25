'use client'

import { Container, Nav, Navbar } from "react-bootstrap";

export default function Pagina({ titulo, children }) {

  return (
    <>

      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Copa do Mundo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">

              <Nav.Link href="/selecoes">Seleções</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="bg-secondary py-2">
        <h1 className="text-center">{titulo}</h1>
      </div>

      <Container className="mt-3">
        {children}
      </Container>



    </>
  )

}
