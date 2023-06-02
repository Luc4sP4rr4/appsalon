import React, { useState, useEffect } from 'react';
import styles from './BuscarEmpleados.module.css';

const BuscarEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    // Lógica para obtener todos los empleados de la base de datos
    const obtenerEmpleados = async () => {
      try {
        const response = await fetch('/api/empleados');
        const data = await response.json();
        setEmpleados(data);
      } catch (error) {
        console.error('Error al obtener los empleados:', error);
      }
    };

    obtenerEmpleados();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Buscar Empleados</h2>
      <ul className={styles.listaEmpleados}>
        {empleados.length > 0 ? (
          empleados.map((empleado) => (
            <li key={empleado._id}>
              <strong>Nombre:</strong> {empleado.nombre} {empleado.apellido}
            </li>
          ))
        ) : (
          <li>No hay empleados registrados.</li>
        )}
      </ul>
    </div>
  );
};

export default BuscarEmpleados;