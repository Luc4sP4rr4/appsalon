import { useState } from 'react'
import styles from './Caja.module.css'

const Caja = () => {
 const [ op , setOp ] = useState('')

 const handleSeleccionarOpcion = (opcionSeleccionada) => {
  setOp(opcionSeleccionada);
  };

  let renderiza;
  
  switch (op) {
    
    case "Cobrar":
      renderiza = <Clientes/>;
      break;
    case "Historial":
      renderiza = <Empleados/>;
      break;
      case "movimientos":
      renderiza = <Productos/>;
      break;
      case "AbrirCerrar":
      renderiza = <Servicios/>;
      break;
      
    default:
      renderiza = <Cobrar/>;
      break;
  }

  return (
    <div className={styles.Container}>
      <h1>CAJA</h1>
      <div className={styles.show}>
        <div className={styles.btnera}>
          <button className={styles.btns} onClick={() => handleSeleccionarOpcion("Cobrar")}>COBRAR</button>
          <button className={styles.btns} onClick={() => handleSeleccionarOpcion("Historial")}>HISTORIAL</button>
          <button className={styles.btns} onClick={() => handleSeleccionarOpcion("Movimientos")}>MOVIMIENTOS</button>
          <button className={styles.btns} onClick={() => handleSeleccionarOpcion("AbrirCerrar")}>ABRIR/CERRAR</button>
        </div>
        <div className={styles.action}>
          {renderiza}
        </div>
      </div>
    </div>
  )
}

export default Caja