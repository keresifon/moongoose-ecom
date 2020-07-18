import React, {useEffect , useState } from 'react';
import {  Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductCategory({match}) {

 const [products, setProduct] = useState([]);
	

    useEffect(() => {
        const fetchCatData = async () => {
        const { data } = await axios.get('/api/products');
        
            setProduct(data);
        };
        fetchCatData();
        //return () => {};
    }, []);
   


  
    const catproduct = products.filter((cat) => cat.category ===  match.params.category);
  
    return (
        <div>
        <div className="container display-4 body-content"> 
        <div className = "row border-bottom ">
            <div className = "h4 font-weight-bold     pt-3 col-md-4 mr-2  ">{match.params.category}</div>
            
			</div>
			</div>
        <div className="container md-5 pt-3" >
             <div className="row">
             {catproduct.map((product) => (
					<div className="col-sm-3" key={product._id}>
						<Card className="border-faded-warning">
							<Link to={`/products/${product._id}`}>
								<Card.Img variant="top" src={product.image} />
							</Link>
							<Card.Body>
								<Card.Title>
									<Link to={`/products/${product._id}`}>{product.name}</Link>
								</Card.Title>
								<Card.Text>${product.price}</Card.Text>
								<Card.Text className="text-small">{product.category}</Card.Text>
								<Button variant="outline-primary">Buy </Button>
							</Card.Body>
						</Card>
					</div>
				))} 
        </div>
        </div>
        </div>
    );
}

export default ProductCategory;