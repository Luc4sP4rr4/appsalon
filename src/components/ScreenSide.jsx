import Caja from './Caja.jsx';
import Empleados from './Empleados.jsx';
import Productos from './Productos.jsx';
import styles from './ScreenSide.module.css';
import Servicios from './Servicios.jsx';
import Turnero from './Turnero.jsx';
import Clientes from './clientes.jsx';
import Inicio from './inicio.jsx';

const ScreenSide = ({opcion}) => {
  
  let renderiza;
  
  switch (opcion) {
    
    case "Clientes":
      renderiza = <Clientes/>;
      break;
    case "Empleados":
      renderiza = <Empleados/>;
      break;
      case "Productos":
      renderiza = <Productos/>;
      break;
      case "Servicios":
      renderiza = <Servicios/>;
      break;
      case "Turnero":
      renderiza = <Turnero/>;
      break;
      case "Caja":
      renderiza = <Caja/>;
      break;
    default:
      renderiza = <Inicio/>;
      break;
  }

  return (
    <div className={styles.Container}>
      {renderiza}
    </div>
  )
}

export default ScreenSide

// {o === <Inicio/> && <Inicio/>}
// {o === <Clientes/> && <Clientes/>}
// {o === <Empleados/> && <Empleados/>}
// {o === <Productos/> && <Productos/>}
// {o === <Servicios/> && <Servicios/>}
// {o === <Turnero/> && <Turnero/>}
// {o === <Caja/> && <Caja/>}