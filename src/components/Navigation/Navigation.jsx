import React from "react";
import { Link } from 'react-router-dom';
import resume from '../../files/angela-donati-portfolio-resume.docx.pdf';
import { Navbar, Nav, Container } from 'react-bootstrap';



function Navigation() {
  return (

    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Angela Donati</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            <Nav.Link href={resume}>Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

    </>

  );

}


export default Navigation