// import express from 'express';
// import {
//   obtenerEmpleados,
//   obtenerEmpleadoPorId,
//   crearEmpleado,
//   actualizarEmpleado,
//   eliminarEmpleado,
// } from '../controllers/empleadoController.js';

// const router = express.Router();

// // Ruta para obtener todos los empleados
// router.get('/empleados', obtenerEmpleados);

// // Ruta para obtener un empleado específico
// router.get('/empleados/:id', obtenerEmpleadoPorId);

// // Ruta para crear un nuevo empleado
// router.post('/empleados', crearEmpleado);

// // Ruta para actualizar un empleado existente
// router.put('/empleados/:id', actualizarEmpleado);

// // Ruta para eliminar un empleado
// router.delete('/empleados/:id', eliminarEmpleado);

// export default router;

import express from "express";

const router = express.Router();

//crear empleado
router.post("/empleados",(req,res)=>{
  res.send("crear empelado")
})

export default router