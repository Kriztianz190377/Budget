import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';


const Question = ({guardarPresupuesto, guardarRestante, actualizarPreguntas}) => {
    
    //define states
    const [quantity, saveQuantity] = useState(0);
    const [error, saveError] = useState(false);

    //funcion que lee el presupuesto
    const defineBudget = e => {
        saveQuantity(parseInt(e.target.value, 10))
    }

    // submit para definir el presupuesto
    const addBudget = e => {
        e.preventDefault();

        //validar
        if (quantity < 1 || isNaN(quantity)) {
            saveError(true);
            return;
        }
        //si pasa la validacion
        saveError(false);
        guardarPresupuesto(quantity);
        guardarRestante(quantity);
        actualizarPreguntas(false);

    }

    return (
        <Fragment>
            <h2>Put Your Budget</h2>
            {
                error ? <Error
                    mensaje="El presupuesto es incorrecto"

                /> : null
            }
            <form
                onSubmit={addBudget}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Put Your Budget"
                    onChange={defineBudget}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Define Budget "
                />
            </form>
        </Fragment>


    );
}

Question.protoTypes={
    guardarPresupuesto:PropTypes.func.isRequired, 
    guardarRestante:PropTypes.func.isRequired, 
    actualizarPreguntas:PropTypes.func.isRequired

}

export default Question;