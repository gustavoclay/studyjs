'use client'

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default function BarraNavegacao() {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/filmes">Movies</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">

              <NavDropdown title="Filmes" id="basic-nav-dropdown">
                <NavDropdown.Item href="/filmes">Populares</NavDropdown.Item>
                <NavDropdown.Item href="/filmes/cartaz">Em Cartaz</NavDropdown.Item>
                <NavDropdown.Item href="/filmes/lancamentos">Lançamentos</NavDropdown.Item>
                <NavDropdown.Item href="/filmes/top">Melhores Avaliados</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Series" id="basic-nav-dropdown">
                <NavDropdown.Item href="/series">Populares</NavDropdown.Item>
                <NavDropdown.Item href="/series/cartaz">Em Cartaz</NavDropdown.Item>
                <NavDropdown.Item href="/series/lancamentos">Lançamentos</NavDropdown.Item>
                <NavDropdown.Item href="/series/top">Melhores Avaliados</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/atores">Atores</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
