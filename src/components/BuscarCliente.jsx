import  { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './styles/BuscarCliente.module.css';

const BuscarCliente = () => {
  const [clientes, setClientes] = useState([]);
  const [nombreCliente, setNombreCliente] = useState('');
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    // Obtener la lista de clientes al cargar el componente
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      const response = await axios.get('/api/clientes');
      setClientes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNombreClienteChange = (e) => {
    setNombreCliente(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Buscar el cliente en la lista
    const clienteEncontrado = clientes.find((cliente) =>
      cliente.nombre.toLowerCase().includes(nombreCliente.toLowerCase())
    );

    setResultado(clienteEncontrado);
    setNombreCliente('');
  };

  return (
    <div className={styles.container}>
      <h2>Buscar Cliente</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese el nombre del cliente"
          value={nombreCliente}
          onChange={handleNombreClienteChange}
          required
        />
        <button type="submit" className={styles.searchButton}>Buscar</button>
      </form>

      {resultado && (
        <div className={styles.resultado}>
          <h3>Cliente Encontrado:</h3>
          <p>Nombre: {resultado.nombre}</p>
          <p>Apellido: {resultado.apellido}</p>
          <p>Teléfono: {resultado.telefono}</p>
          <p>Red Social: {resultado.redSocial}</p>
        </div>
      )}
    </div>
  );
};

export default BuscarCliente;
