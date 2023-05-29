
import styles from './Navbar.module.css'


const Navbar = ({setOpcion}) => {
  
  const handleSeleccionarOpcion = (opcionSeleccionada) => {
    setOpcion(opcionSeleccionada);
  };
  return (
    <div className={styles.Navi}>
    <button className={styles.BtnNav} onClick={() => handleSeleccionarOpcion("Inicio")}>INICIO</button>
    <button className={styles.BtnNav} onClick={() => handleSeleccionarOpcion("Clientes")}>CLIENTES</button>
    <button className={styles.BtnNav} onClick={() => handleSeleccionarOpcion("Empleados")}>EMPLEADOS</button>
    <button className={styles.BtnNav} onClick={() => handleSeleccionarOpcion("Productos")}>PRODUCTOS</button>
    <button className={styles.BtnNav} onClick={() => handleSeleccionarOpcion("Servicios")}>SERVICIOS</button>
    <button className={styles.BtnNav} onClick={() => handleSeleccionarOpcion("Turnero")}>TURNOS</button>
    <button className={styles.BtnNav} onClick={() => handleSeleccionarOpcion("Caja")}>CAJA</button>
    </div>
  )
}

export default Navbar

// const handleSeleccionarOpcion = (opcionSeleccionada) => {
//   setOpcion(opcionSeleccionada);
// };