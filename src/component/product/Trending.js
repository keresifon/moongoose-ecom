import React, {useState, useEffect } from 'react';
import { Card , Button} from 'react-bootstrap'
import axios from 'axios';
import { Link } from 'react-router-dom'





function Trending(props) {
  const [products, setProduct] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get('/api/products');
			setProduct(data);
		};
		fetchData();
		//return () => {};
  }, []);
  

  const trending = products.filter(p => p.trending === true)
    return (
      <>
     <div>
     
        <div className="container md-5 " >
            <div className="row">
            { trending.map(product => 
        <div className="col-sm-3" key={product._id}>
        
        <Card className="border-faded-warning rounded-lg">
        <Link to={`/products/${product._id}`}>
  <Card.Img variant="top" src={product.image} /> 
  </Link>
  <Card.Body>
    <Card.Title><Link to={`/products/${product._id}`}>{product.name}</Link></Card.Title>
    <Card.Text>
      ${product.price}
    </Card.Text>
    <Card.Text>
    <Link to={`/product/${product.category}`}>
      {product.category}
      </Link>
    </Card.Text>
    <Button variant="outline-primary">Buy  </Button>
  </Card.Body>
</Card>   

</div>


)}
       
        </div>
        </div>
        
        </div>
       
        </>
    );
   
}

export default Trending;