import  { useState } from 'react';
import axios from 'axios';
import styles from './styles/AddCliente.module.css';

const AddCliente = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [redSocial, setRedSocial] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleApellidoChange = (e) => {
    setApellido(e.target.value);
  };

  const handleTelefonoChange = (e) => {
    setTelefono(e.target.value);
  };

  const handleRedSocialChange = (e) => {
    setRedSocial(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/clientes', {
        nombre,
        apellido,
        telefono,
        redSocial,
      });

      console.log(response.data); // Puedes mostrar la respuesta en la consola o realizar acciones adicionales

      // Limpiar los campos después de agregar el cliente exitosamente
      setNombre('');
      setApellido('');
      setTelefono('');
      setRedSocial('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Agregar Cliente</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" value={nombre} onChange={handleNombreChange} required />

        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" value={apellido} onChange={handleApellidoChange} required />

        <label htmlFor="telefono">Teléfono:</label>
        <input type="text" id="telefono" value={telefono} onChange={handleTelefonoChange} required />

        <label htmlFor="redSocial">Red Social:</label>
        <input type="text" id="redSocial" value={redSocial} onChange={handleRedSocialChange} required />

        <button type="submit" className={styles.addButton}>Agregar Cliente</button>
      </form>
    </div>
  );
};

export default AddCliente;