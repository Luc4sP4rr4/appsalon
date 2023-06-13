import Caja from './Caja.jsx';
import Empleados from './Empleados.jsx';
import Productos from './Productos.jsx';
import styles from './styles/ScreenSide.module.css';
import Servicios from './Servicios.jsx';
import Turnero from './Turnero.jsx';
import Clientes from './clientes.jsx';
import Inicio from './inicio.jsx';
import NotFound from './NotFound.jsx';

import { Route,Routes } from 'react-router-dom';
import Cliente from './Cliente.jsx';


const ScreenSide = () => {
  
 
  

  return (
    <div className={styles.Container}>
     <Routes>

        <Route path='/inicio' element={<Inicio/>} />
        <Route path='/clientes' element={<Clientes/>}/>
        <Route path='/clientes/:id' element={<Cliente/>}/>

            
        
        <Route path='/empleados' element={<Empleados/>}/>
        <Route path='/productos' element={<Productos/>}/>
        <Route path='/servicios'element={<Servicios/>}/>
        <Route path='/turnero'element={<Turnero/>}/>
        <Route path='/caja' element={<Caja/>}/>
        <Route path='*' element={<NotFound/>}/>
        </Routes>
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