import React from 'react';
import PropTypes from 'prop-types';

const Gastos = ({ gasto}) => (
    <li className="gastos">
        <p>
            {gasto.nombre}
            <span className="gasto">${gasto.quantity} </span>

        </p>


    </li>

);
Gastos.protoTypes={
    gasto:PropTypes.object.isRequired
}

export default Gastos;