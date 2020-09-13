import React, { useState } from 'react';
import Joi from 'joi-browser';
import Input from './Input'

import Select from './Select'
import File from './File';



function Form(data, schema, props, setData) {
	const [errors, setErrors] = useState({});
	

	const validate = () => {
		const options = { abortEarly: false };
		const { error } = Joi.validate(data, schema, options);
		if (!error) return null;

		const errors = {};
		for (let item of error.details) errors[item.path[0]] = item.message;
		return errors;
	};

	const validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const nschema = { [name]: schema[name] };
		const { error } = Joi.validate(obj, nschema, { abortEarly: false });
		return error ? error.details[0].message : null;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const errors = validate();
		
		setErrors(errors || {});

		if (errors) return;

		
      
	};

	const handleChange = ({ currentTarget: input }) => {
		const errors = { ...props.errors };
		const errorMessage = validateProperty(input);
		if (errorMessage) errors[input.name] = errorMessage;
		else delete errors[input.name];
		const ndata = { ...data };
		ndata[input.name] = input.value;
		setData(ndata);
		setErrors(errors);
	};
   
	const renderButton = (label) => {
		return (
         <button  className="btn btn-primary">
				{label}
			</button>
		// 	 <button disabled={validate()} className="btn btn-primary">
		// 	 {label}
		//  </button>
    
			
           
		);
	};

	

	const renderInput = (name, label, type = 'text') => {
		return <Input 
		         type={type}
				 name={name} 
				 value={data[name]} 
				 label={label} 
				 onChange={handleChange} 
				 error={errors[name]} 
				 />;
	};

	const renderFile = (name, label, type = 'file')=> {
		return <File 
		         type={type}
				 name={name} 
				 value={data[name]} 
				 label={label} 
				 onChange={handleChange} 
				 error={errors[name]} 
				 />;
	};

	const renderSelect = (name, label, options) => {
		
		return (
			<Select
				name={name}
				value={data[name]}
				label={label}
				options={options}
				onChange={handleChange}
				error={errors[name]}
			/>
		);
	};
	
	
	return { validate, handleSubmit, handleChange, renderButton, renderInput,renderFile,renderSelect};
}

export default Form;
