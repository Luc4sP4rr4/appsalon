import  { useState } from 'react';
import styles from './AgregarEmpleado.module.css';
import axios from 'axios';

const AgregarEmpleado = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [comision, setComision] = useState('');
  const [telefono, setTelefono] = useState('');
  const [redSocial, setRedSocial] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/empleados', {
        nombre,
        apellido,
        comision,
        telefono,
        redSocial
      });
      
      // Manejar la respuesta del servidor según tus necesidades
      console.log(response.data);

      // Limpiar los campos del formulario después de agregar el empleado
      setNombre('');
      setApellido('');
      setComision('');
      setTelefono('');
      setRedSocial('');
    } catch (error) {
      console.error(error);
      // Manejar el error según tus necesidades
    }
  };

  return (
    <div className={styles.container}>
      <h2>Agregar Empleado</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div>
          <label htmlFor="comision">Comisión:</label>
          <input type="number" id="comision" value={comision} onChange={(e) => setComision(e.target.value)} />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input type="text" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div>
          <label htmlFor="redSocial">Red Social:</label>
          <input type="text" id="redSocial" value={redSocial} onChange={(e) => setRedSocial(e.target.value)} />
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AgregarEmpleado;