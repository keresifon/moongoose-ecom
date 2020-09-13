import React from 'react';
import { Navbar, Nav  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
   <div  >
    <Navbar bg="dark" variant="dark"   className="footer" >
    <Nav className="mr-auto">
    <Nav.Link>Copyright 2020 Okpogho.com</Nav.Link>
    </Nav>
    <Nav className="ml-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      
    </Nav>
    
  </Navbar>

  </div>
  );
}

export default Footer;

