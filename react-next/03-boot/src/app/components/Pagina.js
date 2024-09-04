'use client'

import { Container, Nav, Navbar } from "react-bootstrap";

export default function Pagina({ titulo, ...props }) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/fundamentos">Fundamentos</Nav.Link>
            <Nav.Link href="/arrays">Arrays</Nav.Link>
            <Nav.Link href="/objetos">Objetos</Nav.Link>
            <Nav.Link href="/estados">State</Nav.Link>
            <Nav.Link href="/loja">Loja</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="bg-secondary text-white text-center p-3 mb-3">
        <h1>{titulo}</h1>
      </div>


      <Container>
        {props.children}
      </Container>
    </>
  )
}
