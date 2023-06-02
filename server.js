import express from 'express';
import clienteRoutes from './routes/clienteRoutes.js';
import empleadoRoutes from './routes/empleadoRoutes.js';
import productoRoutes from './routes/productoRoutes.js';

const app = express();

// Agregar middleware necesario
app.use(express.json());

// Rutas
app.use('/clientes', clienteRoutes);
app.use('/empleados', empleadoRoutes);
app.use('/productos', productoRoutes);

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
app.post('/api/empleados', (req, res) => {
  const nuevoEmpleado = req.body;
  // ...
  res.status(201).json(nuevoEmpleado);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});