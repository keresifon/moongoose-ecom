import React, { useEffect } from 'react';
import { Container, Col, Row, Button, Card } from 'react-bootstrap';
import { addToCart } from '../../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

function Cart({ match, location }) {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	const productId = match.params.id;
	const qty = location.search ? Number(location.search.split('=')[1]) : 1;
	const dispatch = useDispatch();

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, qty));
		}
	});

	return (
		<Container fluid className=" display-4 body-content">
			<Row className="border-bottom ">
				<Col className="h4 font-weight-bold     pt-3 col-md-4 mr-2  "> Cart </Col>
			</Row>
			<Row>
				<Col sm={8}>
					{cartItems.length === 0 ? (
						<div>Cart is Empty</div>
					) : (
						cartItems.map((item) => (
							<div key={item._id}>
								<div>
									<img scr={item.image} alt="product" />
								</div>
								<div>{item.name}</div>
								<div>
									Qty:
									<select>
										<option value="1">1</option>
										<option value="2">1</option>
										<option value="3">1</option>
									</select>
								</div>
								<div>{item.price}</div>
							</div>
						))
					)}
				</Col>
				<Col sm={4} className="pt-3">
					<Card className="border-faded-warning w-50 bg-faded-warning">
						<Card.Body>
							<Card.Title></Card.Title>
							<Card.Text className="py-1 text-danger">Price: </Card.Text>

							<Card.Text>
								<Button variant="outline-primary btn-block">CheckOut </Button>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Cart;
