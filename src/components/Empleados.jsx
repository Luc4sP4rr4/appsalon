import { useState } from 'react'
import styles from './styles/Empleados.module.css'
import BuscarEmpleados from './BuscarEmpleado'
import AgregarEmpleado from './AgregarEmpleado'

const Empleados = () => {

  const [ op , setOp ] = useState('')

 const handleSeleccionarOpcion = (opcionSeleccionada) => {
  setOp(opcionSeleccionada);
  }
  let renderiza;
  
   switch (op) {
    
     case "Buscar":
       renderiza = <BuscarEmpleados/>;
       break;
     case "Agregar":
       renderiza = <AgregarEmpleado/>;
       break;
      
      
     default:
       renderiza = <BuscarEmpleados/>;
       break;
   }
  return (
    <div className={styles.Container}>
      <h1>EMPLEADOS</h1>
      <div className={styles.show}>
        contenedor de productos
        <div className={styles.btnera}>
          <button className={styles.btns} onClick={() => handleSeleccionarOpcion("Buscar")}>BUSCAR</button>
          <button className={styles.btns} onClick={() => handleSeleccionarOpcion("Agregar")}>AGREGAR</button>
          </div>
          {renderiza}
       </div>
      </div>
    
  )
}

export default Empleados
