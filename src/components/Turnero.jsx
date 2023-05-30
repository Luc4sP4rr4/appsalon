import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import db from '../db/base.js'

const Turnero = () => {
  let turnosdiarios = db[4].map((item)=>{
    return item
    
  })
  
  const [fecha, setFecha] = useState(null);
  const [peluquero, setPeluquero] = useState('');
  const [tipoServicio, setTipoServicio] = useState('');

  const [turnero, setTurnero] = useState(turnosdiarios); // Aquí debes tener tus datos del turnero
  console.log(turnero)
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


  return (
    <div>
      <h1>TURNERO</h1>
      <div>
      <label htmlFor="fecha">Fecha:</label>
      <DatePicker id="fecha" selected={fecha} onChange={handleFechaChange} />
      <label htmlFor="peluquero">Peluquero:</label>
      <input type="text" id="peluquero" value={peluquero} onChange={handlePeluqueroChange} />

      <label htmlFor="tipoServicio">Tipo de Servicio:</label>
      <select id="tipoServicio" value={tipoServicio} onChange={handleTipoServicioChange}>
        <option value="">Todos</option>
        <option value="corte">Corte</option>
        <option value="corteBarba">Corte y Barba</option>
      </select>
      </div>
      <ul>
        {turnosFiltrados.map((turno) => (
          <li key={turno.id}>
            {turno.paciente} - {turno.fecha} - {turno.peluquero} - {turno.tipoServicio}
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Turnero