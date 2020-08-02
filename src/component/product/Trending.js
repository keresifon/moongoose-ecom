import React, { useState, useEffect, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import http from '../../services/httpService';
import { CartContext } from '../../context/Context';
import { ShoppingBasket } from '../../services/cartService';

function Trending(props) {
	const [products, setProduct] = useState([]);
	const [cart, setCart] = useContext(CartContext);
	const [qty, setQty] = useState(1);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await http.get('/products');
			setProduct(data);
		};
		fetchData();
		//return () => {};
	}, []);

	const addToCart = ShoppingBasket(cart, qty, setCart);

	const trending = products.filter((p) => p.trending === true);

	return (
		<>
			<div>
				<div className="container md-5 ">
					<div className="row">
						{trending.map((product) => (
							<div className="col-sm-3" key={product._id}>
								<Card className="border-faded-warning rounded-lg">
									<Link to={`/products/${product._id}`}>
										<Card.Img variant="top" src={product.image} />
									</Link>
									<Card.Body>
										<Card.Title>
											<Link to={`/products/${product._id}`}>{product.name}</Link>
										</Card.Title>
										<Card.Text>${product.price}</Card.Text>
										<Card.Text className="text-small">
											<Link to={`/product/${product.category}`}>{product.category}</Link>
										</Card.Text>
										<Button variant="outline-primary" onClick={() => addToCart(product)}>
											Add To Cart{' '}
										</Button>
									</Card.Body>
								</Card>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Trending;
