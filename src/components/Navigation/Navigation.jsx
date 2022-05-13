import React from "react";
import { HashRouter, Link } from 'react-router-dom';
import resume from '../../files/angela-donati-portfolio-resume.docx.pdf';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Nav from 'react-bootstrap/Nav'

function Navigation () {
  return (
<>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Angela Donati</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
      <Nav.Link href="/Contact">Contact</Nav.Link>
      <Nav.Link href={resume}>Resume</Nav.Link>
      

    </Nav>
    </Container>
  </Navbar>
  <br />
  
  </>);
  
}

export default Navigation