import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import shortid from 'shortid';


const Formulario = ({ guardarGasto, guardarCrearGasto }) => {

    const [nombre, guardarNombre] = useState('');
    const [quantity, guardarCantidad] = useState(0);

    const [error, guardarError] = useState(false);

    //cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();
        //validar
        if (quantity < 1 || isNaN(quantity) || nombre.trim() === '') {
            guardarError(true);
            return;
        } else {
            guardarError(false);
        }
        //construir un gasto
        const gasto = {
            nombre,
            quantity,
            id: shortid.generate()
        }
        console.log(gasto);

        //pasar el gasto al compononte principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        //resetear el from
        guardarNombre('');
        guardarCantidad(0);


    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2 >Agregar tus gastos aqui</h2>
            {error ?
                (<h1>
                    <Error
                        mensaje='Llenar todos datos'
                    /></h1>
                )
                : null
            }

            <div className="campo">
                <label>Nombre de gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gastos</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={quantity}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width" />

        </form>
    );
}

Formulario.protoTypes={    
    guardarGasto:PropTypes.func.isRequired,
    guardarCrearGasto:PropTypes.func.isRequired

}

export default Formulario;
