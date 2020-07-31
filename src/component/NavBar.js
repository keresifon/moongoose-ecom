import React , {useContext} from 'react';
import {Link } from 'react-router-dom'
import { Navbar, Nav,  FormControl, Form, Button  } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../CartContext';


function NavBar(props) {
  const [cart, setCart] = useContext(CartContext);
    return (
      <>
      <Navbar bg="dark" variant="dark">
      
      <Navbar.Text className="mr-auto container">Available 24/7</Navbar.Text>
  </Navbar>
  
        <Navbar  className="bg-mongoose-ecom border-bottom border-secondary">
        {/* <Button className = "harmburger">&#9776;</Button> */}
    <Navbar.Brand className ="display-1">Okpogho</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <div className="container">
      <Nav className="mr-auto ">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/products">Shop</Nav.Link>
       
      </Nav>
      <Nav className="ml-auto ">
      <Nav.Link as={Link} to="/register">SignUp</Nav.Link>
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
      <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
      <Nav.Link as={Link} to="/cart"><FaShoppingCart className="h4" />{cart.length}</Nav.Link>
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