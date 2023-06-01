import express from 'express';
import {
  obtenerTurnos,
  obtenerTurno,
  crearTurno,
  actualizarTurno,
  eliminarTurno,
} from '../controllers/turnoController';

const router = express.Router();

// Ruta para obtener todos los turnos
router.get('/turnos', obtenerTurnos);

// Ruta para obtener un turno específico
router.get('/turnos/:id', obtenerTurno);

// Ruta para crear un nuevo turno
router.post('/turnos', crearTurno);

// Ruta para actualizar un turno existente
router.put('/turnos/:id', actualizarTurno);

// Ruta para eliminar un turno
router.delete('/turnos/:id', eliminarTurno);

export default router;