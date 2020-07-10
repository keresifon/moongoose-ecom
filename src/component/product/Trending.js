import React from 'react';
import { Card , Button} from 'react-bootstrap'
import data from '../data'
import { Link } from 'react-router-dom'





function Trending(props) {
  const trending = data.products.filter(p => p.trending === true)
    return (
      <>
     <div>
     
        <div className="container md-5 " >
            <div className="row">
            { trending.map(product => 
        <div className="col-sm-3" key={product._id}>
        
        <Card className="border-faded-warning rounded-lg">
        <Link to={`/products/${product._id}`}>
  <Card.Img variant="top" src={product.image} /> </Link>
  <Card.Body>
    <Card.Title><Link to={`/products/${product._id}`}>{product.name}</Link></Card.Title>
    <Card.Text>
      ${product.price}
    </Card.Text>
    <Card.Text>
      {product.category}
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