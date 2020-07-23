import React, { useContext, useState } from 'react';
import { CartContext } from '../../CartContext';
import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cart() {
	const [cart, setCart] = useContext(CartContext);
	const [qty, setQty] = useState(1);

	const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

	const removeFromCart = (item) => {
		const ncart = cart.filter((cartItem) => cartItem._id !== item._id);
		setCart(ncart);
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
										<Col sm={3}>
											<Image src={item.image} alt="" className="img-fluid ml-6 " />
										</Col>
										<Col>
											<div>
												<Link to={`/products/${item._id}`}>{item.name}</Link>
											</div>
											<div>
												Qty:
												<select
													className=" custom-select-sm"
													value={item.qty}
													onChange={(e) => {
														setQty(e.target.value);
													}}
												>
													<option>1</option>
													<option>2</option>
													<option>3</option>
													<option>4</option>
												</select>
												{item.qty}
											</div>{' '}
											<Button onClick={() => removeFromCart(item)}>Delete</Button>
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
