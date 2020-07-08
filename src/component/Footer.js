import React from 'react';
import { Navbar, Nav  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
   
    <Navbar bg="light" variant="light"   className="footer" >
    <Nav className="mr-auto">
    <Nav.Link>Copyright 2020 Phina</Nav.Link>
    </Nav>
    <Nav className="ml-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      
    </Nav>
    
  </Navbar>
  );
}

export default Footer;