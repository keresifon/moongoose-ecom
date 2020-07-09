import React from 'react';
import {Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, FormControl, Form, Button  } from 'react-bootstrap';


function NavBar(props) {
    return (
      <>
      <Navbar bg="dark" variant="dark">
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
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
  </>
    );
}

export default NavBar;