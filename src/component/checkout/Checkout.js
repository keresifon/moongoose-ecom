import React, { useContext } from 'react';
import { CartContext, UserContext, OrderContext } from '../../context/Context';
import { Container, Col, Row, Image, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import _ from 'lodash';

function Checkout() {
	const [cart, setCart] = useContext(CartContext);
	//const [order, setOrder] = useContext(OrderContext);
	const user = useContext(UserContext);

	const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

	const removeFromCart = (item) => {
		const ncart = cart.filter((cartItem) => cartItem._id !== item._id);
		setCart(ncart);
	};

	const updateCart = (item, e) => {
		_.chain(cart).find({ _id: item._id }).merge({ qty: e }).head().value();

		setCart((cart) => [...cart]);
	};

	// const checkOut = (order) => {
	// 	const orders = [...cart];
	// 	const itemsOrdered = orders.map((order) => ({ name: order.name, price: order.price, image:order.image, qty: order.qty }));
	// 	const orderId = _.uniqueId('oid_');
	// 	const ordered = _.concat(orderId, itemsOrdered, totalPrice, user.email);
	// 	setOrder(ordered);
	// };

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
															Qty :
															<select
																className="custom-select-sm input-group-sm"
																value={item.qty}
																onChange={(e) => updateCart(item, e.target.value)}
															>
																<option>1</option>
																<option>2</option>
																<option>3</option>
																<option>4</option>
																<option>5</option>
																<option>6</option>
																<option>7</option>
																<option>8</option>
																<option>9</option>
																<option>10</option>
															</select>
														</div>{' '}
														<Button
															variant="outline-primary "
															size="sm"
															onClick={() => removeFromCart(item)}
														>
															Delete
														</Button>
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
											<Button variant="outline-primary btn-block"   >
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
