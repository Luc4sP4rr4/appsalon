import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {router as caja} from './routes/caja.routes.js';
import {router as clientes} from './routes/clientes.routes.js';
import {router as empleados} from './routes/empelados.routes.js';
import {router as productos} from './routes/productos.routes.js';
import {router as servicios} from './routes/servicios.routes.js';
import {router as turnos} from './routes/turnos.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de enrutamiento
app.use(express.json());
app.use('/api', caja, clientes,empleados,productos,servicios,turnos );

// Conexión a la base de datos MongoDB
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
    // Inicia el servidor
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('Error al conectar a la base de datos:', error);
  });
