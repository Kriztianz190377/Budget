import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Formulario from './components/Formulario'
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {

  console.log('cargando APP')

  //definir state 

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpreguntas, actualizarPreguntas] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);

  //useEfect que actualiza el restante
  useEffect(() => {
    if (creargasto) {
      //agrega el nuevo presupuesto 
      guardarGastos([
        ...gastos,
        gasto

      ]);
      //resta del presupuesto actual
      const presupuestoRestante =restante-gasto.quantity;
      guardarRestante(presupuestoRestante);
        //resetear a false
        guardarCrearGasto(false);
    }
  }, [gasto, creargasto, gastos, restante]);



  return (
    <div className="container">
      <header>
        <h1>BUDGET</h1>
        <div className="contenido-principal contenido">
          {mostrarpreguntas ?
            (
              <Question
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPreguntas={actualizarPreguntas}
              />
            ) :
            (
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    guardarGasto={guardarGasto}
                    guardarCrearGasto={guardarCrearGasto}


                  />
                </div>

                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                  />
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}

                  />
                </div>

              </div>
            )
          }

        </div>

      </header>

    </div>


  );
}

export default App;
