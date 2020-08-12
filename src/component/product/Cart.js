import React, { useContext } from 'react';
import { CartContext, UserContext, OrderContext } from '../../context/Context';
import { Container, Col, Row, Image, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { saveOrder } from '../../services/orderService';
import { v1 as uuidv1 } from 'uuid';

function Cart() {
	const [cart, setCart] = useContext(CartContext);
	const [order, setOrder] = useContext(OrderContext);
	//const [order] = useState({ itemsOrdered: '', user: '', totalPrice: '' });
	const user = useContext(UserContext);

	const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
	const totalQuantity = cart.reduce((acc, curr) => acc + curr.qty * 1, 0);

	const removeFromCart = (item) => {
		const ncart = cart.filter((cartItem) => cartItem._id !== item._id);
		setCart(ncart);
	};

	const updateCart = (item, e) => {
		_.chain(cart).find({ _id: item._id }).merge({ qty: e }).head().value();

		setCart((cart) => [...cart]);
	};

	const checkOut = async (order) => {
		const orders = [...cart];
		const itemsOrdered = orders.map((order) => ({
			name: order.name,
			price: order.price,
			image: order.image,
			qty: order.qty,
		}));
		//You are passing an object to the database so using merge rather than concat produces better results
		const transaction_ref = uuidv1();
		
		const ordered = _.merge({ itemsOrdered: itemsOrdered }, { transaction_ref : transaction_ref, totalPrice: totalPrice, user: user.email });
		setOrder(ordered);
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
								<div className="h4 font-weight-bold     pt-5 col-md-4 mr-2  ">Shopping Cart</div>
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
														₦{item.price * item.qty}
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
											Subtotal ({totalQuantity} items) : ₦{totalPrice}{' '}
										</Card.Text>
                                        {!user && (
														<div>
														You have to be logged in to check out!
															</div>
														)}
										<Card.Text>
										{user && (
											<Button
												variant="outline-primary btn-block"
												as={Link}
												to="/checkout"
												onClick={() => checkOut(order)}
											>
												Proceed to Checkout
											</Button>
										)}
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

export default Cart;
