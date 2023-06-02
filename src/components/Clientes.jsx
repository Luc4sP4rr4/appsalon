import  { useState } from 'react';
import styles from './Clientes.module.css';
import AddCliente from './AgregarCliente';
import BuscarCliente from './BuscarCliente';

 const Clientes = () => {

  const [ op , setOp ] = useState('')

 const handleSeleccionarOpcion = (opcionSeleccionada) => {
  setOp(opcionSeleccionada);
  }
  let renderiza;
  
   switch (op) {
    
     case "Buscar":
       renderiza = <BuscarCliente/>;
       break;
     case "Agregar":
       renderiza = <AddCliente/>;
       break;
      
      
     default:
       renderiza = <AddCliente/>;
       break;
   }

   return (
     <div className={styles.Container}>
       <h1>CLIENTES</h1>
      
       <div className={styles.show}>
         TABLA DE CLIENTES
         <div className={styles.btnera}>
          <button className={styles.btns} onClick={() => handleSeleccionarOpcion("Buscar")}>BUSCAR</button>
          <button className={styles.btns} onClick={() => handleSeleccionarOpcion("Agregar")}>AGREGAR</button>
          </div>
          {renderiza}
       </div>

    
     </div>
   )
 }

export default Clientes