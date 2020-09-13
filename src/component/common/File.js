import React from 'react';

function File({name, label, error, type }) {
    return (
        
           
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input 
      name={name}
      type={type}
      id={name}
      className="form-control-file" />
       { error && <div className="alert alert-danger">{error} </div>}
  </div>


    );
}

export default File;

