import React, { useState } from 'react';
import Joi from 'joi-browser';
import Form from './common/Form';
import { register } from '../services/userService';
import auth from '../services/authService';
import { Container, Row, Col } from 'react-bootstrap';

function Register(props) {
	const [data, setData] = useState({ username: '', password: '', name: '' });
	const [errors, setErrors] = useState({});

	const schema = {
		username: Joi.string().required().email().label('Username'),
		password: Joi.string().required().min(5).label('Password'),
		name: Joi.string().required().label('Name'),
	};

	const doSubmit = async (event) => {
		event.preventDefault();
		const verrors = validate();

		setErrors(verrors || {});

		if (verrors) return;
		try {
			const response = await register(data);
			auth.loginWithJwt(response.headers['x-auth-token']);
			window.location = '/';
		} catch (ex) {
			if (ex.response && ex.response.status === 400) {
				//const errors = { ...errors}
				errors.username = ex.response.data;
				setErrors(errors);
			}
		}
	};

	const { renderButton, renderInput, validate } = Form(data, schema, props, setData);

	return (
		<Container>
  <Row>
    <Col>{''}</Col>
    <Col xs={5} className="bg-secondary"><div>
			<h1>Register</h1>

			<form onSubmit={doSubmit}>
				{renderInput('username', 'Username')}
				{renderInput('password', 'Password', 'password')}
				{renderInput('name', 'Name')}
				{renderButton('Register')}
			</form>
		</div></Col>
    <Col>{''}</Col>
  </Row>
</Container>

	);
}

export default Register;
