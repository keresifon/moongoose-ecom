import React from 'react';
import {Link } from 'react-router-dom'
import { Navbar, Nav, FormControl, Form, Button  } from 'react-bootstrap';


function NavBar(props) {
    return (
      <>
      <Navbar bg="dark" variant="dark">
      
      <Navbar.Text className="mr-auto container">Available 24/7</Navbar.Text>
  </Navbar>
  
        <Navbar  className="bg-mongoose-ecom">
          
    <Navbar.Brand className ="display-4">NoWahala</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <div className="container">
      <Nav className="mr-auto ">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/products">Shop</Nav.Link>
       
      </Nav>
      </div>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>

  <Navbar bg="dark" variant="dark">
      <Navbar.Text className="mr-auto container">Available 24/7</Navbar.Text>
  </Navbar>
 
  </>
    );
}

export default NavBar;