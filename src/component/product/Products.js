import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Products(props) {
	const [products, setProduct] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get('/api/products');
			setProduct(data);
		};
		fetchData();
		//return () => {};
	}, []);

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
						{products.map((product) => (
							<div className="col-sm-3" key={product._id}>
								<Card className="border-faded-warning">
									<Link to={`/products/${product._id}`}>
										<Card.Img variant="top" src={product.image} />{' '}
									</Link>
									<Card.Body>
										<Card.Title>
											<Link to={`/products/${product._id}`}>{product.name}</Link>
										</Card.Title>
										<Card.Text>${product.price}</Card.Text>
										<Card.Text><Link to={`/product/${product.category}`}>{product.category}</Link></Card.Text>
										<Button variant="outline-primary">Buy </Button>
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
