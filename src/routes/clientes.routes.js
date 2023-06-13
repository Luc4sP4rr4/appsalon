import express from 'express';
import {
  obtenerClientes,
  obtenerCliente,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
} from '../controllers/clienteController.js';

const router = express.Router();

// Ruta para obtener todos los clientes
router.get('/clientes', obtenerClientes);

// Ruta para obtener un cliente específico
router.get('/clientes/:id', obtenerCliente);

// Ruta para crear un nuevo cliente
router.post('/clientes', crearCliente);

// Ruta para actualizar un cliente existente
router.put('/clientes/:id', actualizarCliente);

// Ruta para eliminar un cliente
router.delete('/clientes/:id', eliminarCliente);

export default router;