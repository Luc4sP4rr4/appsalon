import { useState } from 'react'
import styles from './Caja.module.css'

const Caja = () => {
 const [ op , setOp ] = useState('')

 const handleSeleccionarOpcion = (opcionSeleccionada) => {
  setOp(opcionSeleccionada);
  };

  let renderiza = 
  
  //  switch (op) {
    
  //    case "Cobrar":
  //      renderiza = 'mauri se la come doblada '/*<Clientes/>*/;
  //      break;
  //    case "Historial":
  //      renderiza =  /*<Clientes/>*/;
  //      break;
  //      case "movimientos":
  //      renderiza =  /*<Clientes/>*/;
  //      break;
  //      case "AbrirCerrar":
  //      renderiza =  /*<Clientes/>*/;
  //      break;
      
  //    default:
  //      renderiza =  /*<Clientes/>*/;
  //      break;
  //  }

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