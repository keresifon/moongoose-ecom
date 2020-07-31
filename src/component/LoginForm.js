import React, { useState } from 'react';
import Joi from 'joi-browser';
import Form from './common/Form';
import auth from '../services/authService'
import {  Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function LoginForm(props) {
	const [data, setData] = useState({ username: '', password: '' });
	const [errors, setErrors] = useState({});

	const schema = {
		username: Joi.string().required().label('Username'),
		password: Joi.string().required().label('Password'),
	};
	
	const doSubmit = async (event) => {
		event.preventDefault();
		const verrors = validate();
		
		setErrors(verrors || {});

		if (verrors) return;
		try {
			
			await auth.login(data.username, data.password);
			
			const { state } = props.location
			window.location = state ? state.from.pathname : '/';
			
			
		} catch (ex) {
			if (ex.response && ex.response.status === 400) {
				errors.username = ex.response.data;
				setErrors(errors );
			}
		}
	};
    if (auth.getCurrentUser()) return <Redirect to="/"/>
	const { validate,renderButton, renderInput } = Form(data, schema, props, setData);
   
	return (
        <Container>
  <Row>
    <Col>{''}</Col>
    <Col xs={5} className="bg-secondary"><div >
			<h3>Login</h3>

			<form onSubmit={doSubmit}>
				{renderInput('username', 'Username')}
				{renderInput('password', 'Password', 'password')}
				{renderButton('Login')}
			</form>
		</div></Col>
    <Col>{''}</Col>
  </Row>
</Container>
		
	);
}

export default LoginForm;