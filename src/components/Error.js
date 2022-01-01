import React from 'react';
import PropTypes from 'prop-types';

const Error = ({mensaje}) => {
    return (  
    <h2 className="alert alert-danger error">
        {mensaje}</h2>
     );
}
Error.protoTypes={
    mensaje:PropTypes.string.isRequired, 
  
}
 
export default Error;