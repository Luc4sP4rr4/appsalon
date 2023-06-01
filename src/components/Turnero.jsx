import  { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Turnero.module.css';

const Turnero = () => {
  const [fecha, setFecha] = useState('');
  const [peluquero, setPeluquero] = useState('');
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    obtenerTurnos();
  }, []);

  const obtenerTurnos = async () => {
    try {
      const response = await axios.get('/api/turnos');
      setTurnos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filtrarTurnos = () => {
    // Aplicar filtros de fecha y peluquero a los turnos
    let turnosFiltrados = turnos;

    if (fecha) {
      turnosFiltrados = turnosFiltrados.filter(turno => turno.fecha === fecha);
    }

    if (peluquero) {
      turnosFiltrados = turnosFiltrados.filter(turno => turno.peluquero === peluquero);
    }

    return turnosFiltrados;
  };

  return (
    <div className={styles.container}>
      <h1>Turnero</h1>
      <div>
        <label htmlFor="fecha">Fecha:</label>
        <input
          type="text"
          id="fecha"
          value={fecha}
          onChange={e => setFecha(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="peluquero">Peluquero:</label>
        <input
          type="text"
          id="peluquero"
          value={peluquero}
          onChange={e => setPeluquero(e.target.value)}
        />
      </div>
      <button className={styles.button} onClick={filtrarTurnos}>Filtrar</button>
      <ul className={styles.list}>
        {filtrarTurnos().map(turno => (
          <li key={turno.id} className={styles.item}>
            <p>Fecha: {turno.fecha}</p>
            <p>Hora: {turno.hora}</p>
            <p>Peluquero: {turno.peluquero}</p>
            <p>Servicio: {turno.servicio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Turnero;