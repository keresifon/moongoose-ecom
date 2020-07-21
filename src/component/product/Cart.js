import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';

import { Container, Col, Row,  Image } from 'react-bootstrap';

function Cart() {
	const [cart, setCart] = useContext(CartContext);
  console.log(cart)
	return (
		<div className="container-fluid">
			<div> items in cart : {cart.length} </div>
			<div>total price : 0 </div>
           <div>
		   <Container fluid>
			   <Row>
				   <Col></Col>
				   <Col></Col>
				   <Col>Price</Col>
			   </Row>
   {cart.map(item=>
  <Row className="pb-3">
    <Col sm={1}><Image src={item.image} alt="" className="img-fluid ml-6 " /></Col>
	<Col><div>{item.name}</div>
   <div>{item.qty}</div>
	</Col>
    <Col>{item.price*item.qty}</Col>
    
  </Row>
   )}
</Container>
		   </div>
		</div>
	);
}

export default Cart;
