import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
export default function Menu(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/"><Navbar.Brand><strong>Menu</strong></Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Formularios" id="basic-nav-dropdown">
              <LinkContainer to="/fichario"><NavDropdown.Item><font color="green">Fichario</font></NavDropdown.Item></LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/doacao"><NavDropdown.Item><font color="green">Doação de valores</font></NavDropdown.Item></LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/construcao"><NavDropdown.Item><font color="red">Doação de produtos</font></NavDropdown.Item></LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}