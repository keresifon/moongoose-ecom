import React, {useEffect , useState } from 'react';
import { Container, Col, Row, Image, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';




function ProductDetails({match, history}) {

	const [products, setProduct] = useState([]);
	const [catProducts, setCatProduct] = useState([]);
	const [qty , setQty] = useState(1)

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get('/api/products');
			const productId = match.params.id;
			const product = data.find((p) => p._id === productId);

			setProduct(product);
		};
		fetchData();
		//return () => {};
  }, [match.params.id]);
  
  useEffect(() => {
	const fetchCatData = async () => {
		const { data } = await axios.get('/api/products');
		

		setCatProduct(data);
	};
	fetchCatData();
	//return () => {};
}, [match.params.id]);
	
const handleAddToCart = () => {
	history.push("/cart/" + match.params.id + "?qty=" + qty )
}
	
	const catproduct = catProducts.filter((cat) => cat.category === products.category && cat._id !== match.params.id);



	
	

	return (

		
		<Container fluid className="pt-3">
			<Row className="pb-3">
				  <Col sm={4}>
					{' '}
					<Image src={products.image} alt="" className="img-fluid ml-6" />
				</Col>
				<Col sm={4}>
					<div className="h4  py-3">{products.name}</div>
					<div className="font-weight-bold  border-bottom text-danger">${products.price}</div>
					<div className="py-1">Brand : {products.brand}</div>
					<div className="py-3 text-small">{products.category}</div>
					<div className="">Description</div>
					<div className=""> {products.description}</div>
				</Col>
				<Col sm={4}>
					<Card className="border-faded-warning w-50 bg-faded-warning">
						{' '}
						<Card.Body>
							<Card.Title></Card.Title>
							<Card.Text className="py-1 text-danger">Price: ${products.price}</Card.Text>
							<Card.Text className="py-1">Status: <span className=" text-success">{products.countInStock > 0 ? "In Stock" : "Out of Stock"}</span></Card.Text>
							<Card.Text className="py-1">
								Qty: 
								<select className=" custom-select-sm" value={qty} onChange={(e) => {setQty(e.target.value)}}>
									{[...Array(products.countInStock).keys()].map( x => 
									<option key ={x + 1} value={x+1}>{x+1}</option>
										)}
									
								</select>
							</Card.Text>

							<Card.Text>
								{ products.countInStock > 0 && <Button variant="outline-primary btn-block" onClick={handleAddToCart}>Add to Cart </Button>}
							</Card.Text>
							<Card.Text>
							{ products.countInStock > 0 && <Button variant="outline-primary btn-block">Buy Now</Button>}
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
								<Card.Text className="text-small" >{product.category}</Card.Text>
								<Button variant="outline-primary" >Buy </Button>
							</Card.Body>
						</Card>
					</div>
				))} 
			</Row>
		</Container>
	
	);
}

export default ProductDetails;
