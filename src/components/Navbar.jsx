
import styles from './styles/Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <div className={styles.Navi}>
      <NavLink to="/inicio" className={styles.BtnNav}>INICIO</NavLink>
      <NavLink to="/clientes" className={styles.BtnNav}>CLIENTES</NavLink>
      <NavLink to="/empleados" className={styles.BtnNav}>EMPLEADOS</NavLink>
      <NavLink to="/productos" className={styles.BtnNav}>PRODUCTOS</NavLink>
      <NavLink to="/servicios" className={styles.BtnNav}>SERVICIOS</NavLink>
      <NavLink to="/turnero" className={styles.BtnNav}>TURNOS</NavLink>
      <NavLink to="/caja" className={styles.BtnNav}>CAJA</NavLink>
    </div>
  )
}

export default Navbar
