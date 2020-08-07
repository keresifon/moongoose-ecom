import React, { useState } from 'react';
import Joi from 'joi-browser';
import Form from '../common/Form';
import {  Redirect } from 'react-router-dom';
import { saveProduct} from '../../services/prodService'
import { Container, Row, Col } from 'react-bootstrap';

function AddProduct(props) {
	const [data, setData] = useState({ name: '', price: '', brand: '', description: '', image: '', category: '', trending: '', countInStock: '', tags: '' });
	const [errors, setErrors] = useState({});

	const schema = {
		name: Joi.string().required().label('Name'),
    price: Joi.number().required().label('Price'),
    brand: Joi.string().required().label('Brand'),
    description: Joi.string().required().label('Description'),
    image: Joi.string().required().label('Image'),
    category: Joi.string().required().label('Category'),
    trending: Joi.boolean().default(0).label('Trending'),
    countInStock: Joi.string().required().label('CountInStock'),
    tags: Joi.array().max(2).items(Joi.string()).label('Tags'),
	};
  
 
    const doSubmit = async (event) => {
		event.preventDefault();
		const errors = validate();
	 await saveProduct(data);
   

		props.history.push('/');

		
	};

	const { renderButton, renderInput, validate} = Form(data, schema, props, setData);
   
	return (
        <Container>
  <Row>
    <Col>{''}</Col>
    <Col xs={5} className="bg-secondary"><div >
			<h3>Add Product</h3>

			<form onSubmit={doSubmit}>
				{renderInput('name', 'Name')}
        {renderInput('price', 'Price')}
        {renderInput('brand', 'Brand')}
			  {renderInput('description', 'Description')}
        {renderInput('image', 'Image')}
        {renderInput('category', 'Category')}
        {renderInput('trending', 'Trending')}
        {renderInput('countInStock', 'CountInStock')}
        {renderInput('tags', 'Tags')}
				{renderButton('Add')}
			</form>
		</div></Col>
    <Col>{''}</Col>
  </Row>
</Container>
		
	);
}

export default AddProduct;