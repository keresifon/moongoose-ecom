import React from 'react';
import { Container, Col, Row, Image, Button , Card} from 'react-bootstrap';
import data from '../data';
import { Link } from 'react-router-dom'
import Footer from '../Footer';


function ProductDetails({match}) {
    const productId = match.params.id
	const product = data.products.find(p => p._id === productId);
    const catproduct = data.products.filter(cat => cat.category === product.category && cat._id !== productId)
    
    console.log(catproduct)

	return ( 
        <>
    <Container className="vh-100" fluid="sm">
        <Row >
    <Col sm={6}> <Image src={product.image} alt="" className="img-fluid"/></Col>
        <Col sm={6}><div className="display-4 font-weight-bold py-3">{product.name}</div>
    
       <div className="h1 border-top border-bottom text-success">₦{product.price}</div>
       <div className = "py-3">Brand : {product.brand}</div>
       <div className = "py-3">{product.category}</div>
       <div> <Button variant="success">Buy Now</Button></div>
              
        </Col>
        </Row>
        <Row className = "py-5">
    
        <Col><div className="display-4">Description</div>
        <div className="display-5">{product.description}</div>
        
              
        </Col>
        </Row>
        <Row>
           
            { catproduct.map(product => 
        <div className="col-sm-3" key={product._id}>
        
         <Card >
  <Card.Img variant="top" src={product.image} />
  <Card.Body>
    <Card.Title><Link to={`/products/${product._id}`}>{product.name}</Link></Card.Title>
    <Card.Text>
      ${product.price}
    </Card.Text>
    <Card.Text>
      {product.category}
    </Card.Text>
    <Button variant="success">Buy  </Button>
  </Card.Body>
</Card>   
</div>

)}
        </Row>
       
        </Container>
        <div className="p-5"></div>
        <Footer />

</>
        
    )
}

export default ProductDetails;
