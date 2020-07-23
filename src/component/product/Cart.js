import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { Container, Col, Row,  Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cart() {
	const [cart, setCart] = useContext(CartContext);
 
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price*curr.qty , 0)


	return (
		<>
		<div className = "container">
			<div className = "row border-bottom ">
            <div className = "h4 font-weight-bold     pt-5 col-md-4 mr-2  ">Shopping Cart</div>
            <div className=" col-md-4  pt-5 ml-auto  d-flex pb-4  justify-content-end" > Price</div>
			</div>
			<div className="container-fluid">
			
			
           <div>

		  
		   <Container  fluid>
			   
   {cart.map(item=>
   
  <Row className="p-3 border-bottom" key={item._id}>
    <Col sm={3}><Image src={item.image} alt="" className="img-fluid ml-6 " /></Col>
	<Col><div><Link to={`/products/${item._id}`}>{item.name}</Link></div>
   <div>{item.qty}</div>
	</Col>
    <Col className="d-flex justify-content-end">${item.price*item.qty}</Col>
    
  </Row>
   )}
</Container>
		   </div>
		</div>
			
        </div>
		<div className=" container   pt-5 ml-auto  d-flex pb-4  justify-content-end h4" > Total : ${totalPrice} </div>
		</>
	);
}

export default Cart;
