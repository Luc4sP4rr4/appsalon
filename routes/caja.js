import express from 'express';
import {
  abrirCaja,
  cerrarCaja,
  obtenerCaja,
} from '../controllers/cajaController';

const router = express.Router();

// Ruta para abrir la caja
router.post('/caja/abrir', abrirCaja);

// Ruta para cerrar la caja
router.post('/caja/cerrar', cerrarCaja);

// Ruta para obtener los datos de la caja actual
router.get('/caja', obtenerCaja);

export default router;