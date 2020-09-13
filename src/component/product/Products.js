import React, { useState, useEffect, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {CartContext}  from '../../context/Context';
import { ShoppingBasket } from '../../services/cartService';
import _ from 'lodash';
import { getProducts } from '../../services/prodService';

function Products(props) {
	const [products, setProduct] = useState();
	const [cart, setCart] = useContext(CartContext);
	const [qty] = useState(1);

	useEffect(() => {
		async function gProducts() {
			const { data } = await getProducts();
			const products = [...data];
			setProduct(products);
		}
		gProducts();
  }, []);

	
	const sortedProducts = _.orderBy(products, ['date'], ['desc'])
	
	const  addToCart =  ShoppingBasket (cart, qty, setCart);
	

	return (
		<>
			<div>
				<div className="container display-4 body-content"> 
        <div className = "row border-bottom ">
            <div className = "h4 font-weight-bold     pt-3 col-md-4 mr-2  ">Products</div>
            
			</div>
			</div>
				<div className="container md-5 pt-3">
					<div className="row">
						{sortedProducts.map((product) => (
							<div className="col-sm-3" key={product._id}>
								<Card className="border-faded-warning">
									<Link to={`/products/${product._id}`}>
										<Card.Img variant="top" src={product.image} />{' '}
									</Link>
									<Card.Body>
										<Card.Title>
											<Link to={`/products/${product._id}`}>{product.name}</Link>
										</Card.Title>
										<Card.Text>₦{product.price}</Card.Text>
										<Card.Text className="text-small"><Link to={`/product/${product.category.name}`}>{product.category.name}</Link></Card.Text>
										{ product.countInStock > 0 && (
										<Card.Text><Button variant="outline-primary btn-block"  onClick={() => addToCart(product)}>Add to Cart </Button></Card.Text> )}
										{ product.countInStock > 0 && (
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

export default Products;



