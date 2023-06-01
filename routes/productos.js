import express from 'express';
import {
  obtenerProductos,
  obtenerProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} from '../controllers/productoController';

const router = express.Router();

// Ruta para obtener todos los productos
router.get('/productos', obtenerProductos);

// Ruta para obtener un producto específico
router.get('/productos/:id', obtenerProducto);

// Ruta para crear un nuevo producto
router.post('/productos', crearProducto);

// Ruta para actualizar un producto existente
router.put('/productos/:id', actualizarProducto);

// Ruta para eliminar un producto
router.delete('/productos/:id', eliminarProducto);

export default router;