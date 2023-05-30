import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import db from '../db/base.js'
import styles from './Turnero.module.css'

const Turnero = () => {
  let turnosdiarios = db[4].map((item)=>{
    return item
    
  })
  
  const [fecha, setFecha] = useState(null);
  const [peluquero, setPeluquero] = useState('');
  const [tipoServicio, setTipoServicio] = useState('');

  const [turnero, setTurnero] = useState(turnosdiarios); // Aquí debes tener tus datos del turnero
  
  const handleFechaChange = (selectedDate) => {
    setFecha(selectedDate);
  };

  const handlePeluqueroChange = (event) => {
    setPeluquero(event.target.value);
  };

  const handleTipoServicioChange = (event) => {
    setTipoServicio(event.target.value);
  };

  const turnosFiltrados = turnero.filter((turno) => {
    const fechaCumpleFiltro = turno.fecha.includes(fecha);
    const peluqueroCumpleFiltro = turno.peluquero === peluquero || peluquero === '';
    const tipoServicioCumpleFiltro = turno.tipoServicio === tipoServicio || tipoServicio === '';

    return fechaCumpleFiltro && peluqueroCumpleFiltro && tipoServicioCumpleFiltro;
  });
console.log(turnosdiarios)

  return (
    <div className={styles.Container}>
      <h1>TURNERO</h1>
      <div className={styles.filter}>
        <label htmlFor="fecha">Fecha:</label>
        <DatePicker id="fecha" selected={fecha} onChange={handleFechaChange} />
        <label htmlFor="peluquero">Peluquero:</label>
        <select id="peluquero" value={peluquero} onChange={handlePeluqueroChange}>
          <option value="">Todos</option>
          <option value="lucas">Lucas</option>
          <option value="pampa">Pampa</option>
        </select>
        <label htmlFor="tipoServicio">Tipo de Servicio:</label>
        <select id="tipoServicio" value={tipoServicio} onChange={handleTipoServicioChange}>
          <option value="">Todos</option>
          <option value="corte">Corte</option>
          <option value="corteBarba">Corte y Barba</option>
        </select>
      </div>
      <div className={styles.show}>
        tabla
        <ul>
          {turnosdiarios.map((turno) => (
            <li key={turno.id}>
              {turno.id} - {turno.nombre} - {turno.fecha} - {turno.peluquero} - {turno.tipoServicio}
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Turnero