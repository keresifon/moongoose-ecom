import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/Context';
import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import _ from 'lodash';

function Cart() {
	const [cart, setCart] = useContext(CartContext);
	const [qty, setQty] = useState(1);

	const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

	const removeFromCart = (item) => {
		const ncart = cart.filter((cartItem) => cartItem._id !== item._id);
		setCart(ncart);
	};

	const updateCart = (item, e) => {
		 _.chain(cart).find({ _id: item._id }).merge({ qty: e }).head().value();

		setCart((cart) => [...cart]);
	};

	return (
		<>
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
							<Container fluid>
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
													className=" custom-select-sm input-group-sm"
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
											<Button variant="outline-primary "  size="sm" onClick={() => removeFromCart(item)}>Delete</Button>
										</Col>
										<Col sm={2}>
											
										</Col>
										<Col className="d-flex justify-content-end">${item.price * item.qty}</Col>
									</Row>
								))}
								
							</Container>
						)}
					</div>
				</div>
			</div>{' '}
			{cart.length > 0 && (
				<div className=" container   pt-5 ml-auto  d-flex pb-4  justify-content-end h4">
					{' '}
					Total : ${totalPrice}{' '}
				</div>
			)}
			
		</>
	);
}

export default Cart;
