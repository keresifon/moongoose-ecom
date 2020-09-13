import React, { useState, useEffect, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/Context';
import { ShoppingBasket } from '../../services/cartService';
import { getProducts } from '../../services/prodService';
import _ from 'lodash';

function Trending(props) {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useContext(CartContext);
	const [qty] = useState(1);

	useEffect(() => {
		async function gProducts() {
			const { data } = await getProducts();
			const products = [...data];
			setProducts(products);
		}
		gProducts();
  }, []);
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const { data } = await http.get('/products');
	// 		setProduct(data);
	// 	};
	// 	fetchData();
	// 	//return () => {};
	// }, []);

	const addToCart = ShoppingBasket(cart, qty, setCart);

	const trending = products.filter((p) => p.trending === true);

	const sortedTrend = _.orderBy(trending, ['date'], ['desc'])

	return (
		<>
			<div>
				<div className="container md-5 ">
					<div className="row">
						{sortedTrend.map((product) => (
							<div className="col-sm-3" key={product._id}>
								<Card className="border-faded-warning rounded-lg">
									<Link to={`/products/${product._id}`}>
										<Card.Img variant="top" src={product.image} />
									</Link>
									<Card.Body>
										<Card.Title>
											<Link to={`/products/${product._id}`}>{product.name}</Link>
										</Card.Title>
										<Card.Text>₦{product.price}</Card.Text>
										<Card.Text className="text-small">
											<Link to={`/product/${product.category.name}`}>{product.category.name}</Link>
										</Card.Text>
										{product.countInStock > 0 && (
										<Button variant="outline-primary btn-block" onClick={() => addToCart(product)}>
											Add To Cart{' '}
										</Button>
																		)}
										{product.countInStock > 0 && (
									<Button variant="outline-primary btn-block" onClick={() => addToCart(product)} as={Link} to="/cart" >Buy Now</Button>
								)}
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
