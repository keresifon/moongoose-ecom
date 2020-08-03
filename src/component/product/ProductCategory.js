import React, {useEffect , useState, useContext } from 'react';
import {  Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import http from '../../services/httpService'
import {CartContext}  from '../../context/Context';
import {ShoppingBasket} from '../../services/cartService'

function ProductCategory({match}) {

 const [products, setProduct] = useState([]);
 const [cart, setCart] = useContext(CartContext);
 const [qty] = useState(1);
	

    useEffect(() => {
        const fetchCatData = async () => {
        const { data } = await http.get('/products');
        
            setProduct(data);
        };
        fetchCatData();
        //return () => {};
    }, []);
    
    const  addToCart =  ShoppingBasket (cart, qty, setCart);

   

  
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
                                { product.countInStock > 0 && (
								<Button variant="outline-primary" onClick={() => addToCart(product)}>Add To Cart </Button>
                                )}
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