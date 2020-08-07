import React, { useContext, useState } from 'react';
import { CartContext, UserContext} from '../../context/Context';
import { Container, Col, Row, Image, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { saveOrder } from '../../services/orderService';

function Checkout(props) {
	const [cart] = useContext(CartContext);
	const [order] = useState({itemsOrdered : '' , user: '', totalPrice: ''});
	const user = useContext(UserContext);

	const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

	

	 const checkOut =  async (order) => {
		const orders = [...cart];
		 const itemsOrdered = orders.map((order) => ({ name: order.name, price: order.price, image:order.image, qty: order.qty }));
		 //You are passing an objec to the database so using merge rather than concat 
		 const ordered = _.merge({itemsOrdered : itemsOrdered}, {totalPrice: totalPrice,user: user.email })
		await saveOrder(ordered);
		
		 
	
	 };

	return (
		<>
			<Container fluid>
				<Row>
					<Col>{''}</Col>
					<Col sm={8}>
						<div className="container">
							<div className="row border-bottom ">
								<div className="h4 font-weight-bold     pt-5 col-md-4 mr-2  ">CheckOut</div>
								<div className=" col-md-4  pt-5 ml-auto  d-flex pb-4  justify-content-end"> Price</div>
							</div>
							<div className="container-fluid">
								<div>
									{cart.length === 0 ? (
										<div> This is an empty Cart </div>
									) : (
										<Container>
											{cart.map((item) => (
												<Row className="p-3 border-bottom" key={item._id}>
													<Col sm={2}>
														<Image src={item.image} alt="" className="img-fluid ml-6 " />
													</Col>
													<Col sm={2}>
														<div>
															<Link to={`/products/${item._id}`}>{item.name}</Link>
														</div>
														<div className="p-3">
															Qty : {item.qty}
															
														</div>{' '}
														
													</Col>
													<Col sm={2}></Col>
													<Col className="d-flex justify-content-end">
														${item.price * item.qty}
													</Col>
												</Row>
											))}
										</Container>
									)}
								</div>
							</div>
						</div>
					</Col>
					<Col sm={2}>
						{cart.length > 0 && (
							<div className="pt-1 ">
								<Card className="border-faded-warning w-100 bg-faded-warning ">
									{' '}
									<Card.Body>
										<Card.Title> Order</Card.Title>
										<Card.Text className="py-1 text-danger"></Card.Text>
										<Card.Text className="py-1">
											<span className=" text-success"></span>
										</Card.Text>

										<Card.Text className="py-1">
											Subtotal ({cart.length} items) : ${totalPrice}{' '}
										</Card.Text>

										<Card.Text>
											<Button variant="outline-primary btn-block" onClick={() => checkOut(order)}  >
												Pay
											</Button>
										</Card.Text>
									</Card.Body>
								</Card>
							</div>
						)}
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Checkout;
