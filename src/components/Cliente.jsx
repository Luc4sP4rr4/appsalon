import { useParams } from "react-router-dom"

const Cliente = () => {
    const {
        id,
        nombre='diego',
        apellido='armando',
        telefono='12345',
        cumpleaños='ayer',
        redsocial='@cliente123',
        peluquero='lucas',
        historial=['corte','corte','corte y barba','producto','corte'],    
    } = useParams()
  return (
    <div>
        <h1>CLIENTE</h1>
        <p>ID / N° socio : {id}</p>
        <p>Nombre : {nombre}</p>
        <p>Apellido :{apellido}</p>
        <p>Telefono : {telefono}</p>
        <p>Cumpleaños : {cumpleaños}</p>
        <p>Red Social : {redsocial}</p>
        <p>Peluquero : {peluquero}</p>
        <div>
            <p>Historial : </p>
            <ul> 
            {historial.map((s,i)=>(
            <li key={i}>{s}</li>))}
            </ul>
            
        </div>
    </div>
  )
}

export default Cliente