import React, { useState, useContext, useEffect } from 'react';
import Joi from 'joi-browser';
import Form from '../common/Form';
import { saveProduct } from '../../services/prodService';
import { Container, Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import CloudinaryUpload from './CloudinaryUpload';
import { ImgUpContext } from '../../context/Context';
import { getCategories } from '../../services/categoryService';
import { getBrands } from '../../services/brandService';

function AddProduct(props) {
	const [data, setData] = useState({
		name: '',
		price: '',
		brandId: '',
		description: '',
		image: '',
		categoryId: '',
		trending: '',
		countInStock: '',
		tags: '',
	});
	const [imageUrl] = useContext(ImgUpContext);
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
	//const [errors, setErrors] = useState({});

	useEffect(() => {
		async function gCategory() {
			const { data } = await getCategories();
			const category = [...data];
			setCategory(category);
		}
		gCategory();
  }, []);
  
  useEffect(() => {
		async function gBrand() {
			const { data } = await getBrands();
			const brand = [...data];
			setBrand(brand);
		}
		gBrand();
	}, []);

	const schema = {
		name: Joi.string().required().label('Name'),
		price: Joi.number().required().label('Price'),
		brandId: Joi.string().required().label('Brand'),
		description: Joi.string().required().label('Description'),
		//image: Joi.string().required().label('Image'),
		categoryId: Joi.string().required().label('Category'),
		trending: Joi.boolean().default(0).label('Trending'),
		countInStock: Joi.string().required().label('CountInStock'),
		tags: Joi.array().max(2).items(Joi.string()).label('Tags'),
  };
  

	const doSubmit = async (event) => {
		event.preventDefault();
		//	const errors = validate();
		const remdata = _.omit(data, ['image']);
		const combined = _.merge(remdata, { image: imageUrl });

		 console.log(combined)
		await saveProduct(combined);

		props.history.push('/');
	};

	const { renderButton, renderInput, renderSelect } = Form(data, schema, props, setData);

	return (
		<Container>
			<Row>
				<Col>{''}</Col>
			
      	<Col xs={5} className="bg-secondary">
					<div>
						<h3>Add Product</h3>

						<form onSubmit={doSubmit}>
							{renderInput('name', 'Name')}
							{renderInput('price', 'Price')}
							{renderSelect('brandId', 'Brand', brand)}
							{renderInput('description', 'Description')}
							{renderSelect('categoryId', 'Category', category)}
							{renderInput('trending', 'Trending')}
							{renderInput('countInStock', 'CountInStock')}
							{renderInput('tags', 'Tags')}
							{renderButton('Add')}
						</form>
					</div>
				</Col>
				<Col>
					<CloudinaryUpload />
				</Col>
			</Row>
		</Container>
	);
}

export default AddProduct;
