// server.js

import express from 'express';
import clientesRouter from './routes/clientes.js';
import productosRouter from './routes/productos.js';
import serviciosRouter from './routes/servicios.js';
import ticketsCajaRouter from './routes/ticketsCaja.js';
import connectDB from './db/db.js';
import dotenv from 'dotenv';

dotenv.config();

// Configurar Express
const app = express();
app.use(express.json());

// Conexión a la base de datos MongoDB
connectDB()

// Rutas
app.use('/api/clientes', clientesRouter);
app.use('/api/productos', productosRouter);
app.use('/api/servicios', serviciosRouter);
app.use('/api/tickets-caja', ticketsCajaRouter);

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
