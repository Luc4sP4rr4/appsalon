import express from 'express';
import {
  obtenerServicios,
  obtenerServicio,
  crearServicio,
  actualizarServicio,
  eliminarServicio,
} from '../controllers/servicioController';

const router = express.Router();

// Ruta para obtener todos los servicios
router.get('/servicios', obtenerServicios);

// Ruta para obtener un servicio específico
router.get('/servicios/:id', obtenerServicio);

// Ruta para crear un nuevo servicio
router.post('/servicios', crearServicio);

// Ruta para actualizar un servicio existente
router.put('/servicios/:id', actualizarServicio);

// Ruta para eliminar un servicio
router.delete('/servicios/:id', eliminarServicio);

export default router;