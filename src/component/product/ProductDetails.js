import React from 'react';
import { Container, Col, Row, Image, Button, Card } from 'react-bootstrap';
import data from '../data';
import { Link } from 'react-router-dom';

function ProductDetails({ match }) {
	const productId = match.params.id;
	const product = data.products.find((p) => p._id === productId);
	const catproduct = data.products.filter((cat) => cat.category === product.category && cat._id !== productId);

	console.log(catproduct);

	return (
		<Container fluid >
			<Row className="pb-3">
				<Col sm={4}>
					{' '}
					<Image src={product.image} alt="" className="img-fluid ml-6" />
				</Col>
				<Col sm={4}>
					<div className="h4  py-3">{product.name}</div>

					<div className="font-weight-bold  border-bottom text-danger">${product.price}</div>
					<div className="py-1">Brand : {product.brand}</div>
					<div className="py-3">{product.category}</div>
					<div className="">Description</div>
					<div className=""> {product.description}</div>
				</Col>
				<Col sm={4}>
					<Card className="border-faded-warning">
						{' '}
						<Card.Body>
							<Card.Title></Card.Title>
							<Card.Text className="py-1 text-danger">Price: ${product.price}</Card.Text>
							<Card.Text className="py-1">Status: <span className=" text-success">{product.status}</span></Card.Text>
							<Card.Text className="py-1">
								Qty: 
								<select>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
								</select>
							</Card.Text>

							<Card.Text>
								<Button variant="outline-primary">Add to Cart </Button>{' '}
							</Card.Text>
							<Card.Text>
								<Button variant="outline-primary">Buy Now</Button>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row className="p-3 border-top">
				<Col></Col>
			</Row>
			<Row >
				{catproduct.map((product) => (
					<div className="col-sm-2" key={product._id}>
						<Card className="border-faded-warning">
							<Link to={`/products/${product._id}`}>
								<Card.Img variant="top" src={product.image} />
							</Link>
							<Card.Body>
								<Card.Title>
									<Link to={`/products/${product._id}`}>{product.name}</Link>
								</Card.Title>
								<Card.Text>${product.price}</Card.Text>
								<Card.Text>{product.category}</Card.Text>
								<Button variant="outline-primary">Buy </Button>
							</Card.Body>
						</Card>
					</div>
				))}
			</Row>
		</Container>
	);
}

export default ProductDetails;
