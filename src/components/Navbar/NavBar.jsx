import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget ";
import brand from '../../assets/img/brand/brand.png'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg='dark' variant="dark">
      <Container>
        <Navbar.Brand href="#home">
        <img src={brand} alt="brand" style={{ height:'50px'}}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <NavDropdown title="Games" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">PC</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                PS4
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Xbox</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>

            <Nav.Link href="#/">Login/Register</Nav.Link>
            <Nav.Link  href="#/"> <CartWidget /> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
