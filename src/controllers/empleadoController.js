import Empleado from '../models/empleado.js';

// Controlador para obtener todos los empleados
export const obtenerEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los empleados' });
  }
};

// Controlador para obtener un empleado por su ID
export const obtenerEmpleadoPorId = async (req, res) => {
  try {
    const empleado = await Empleado.findById(req.params.id);
    if (!empleado) {
      return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    }
    res.json(empleado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el empleado' });
  }
};

// Controlador para crear un nuevo empleado
export const crearEmpleado = async (req, res) => {
  try {
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.status(201).json(empleado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el empleado' });
  }
};

// Controlador para actualizar un empleado existente
export const actualizarEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!empleado) {
      return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    }
    res.json(empleado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el empleado' });
  }
};

// Controlador para eliminar un empleado existente
export const eliminarEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findByIdAndDelete(req.params.id);
    if (!empleado) {
      return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    }
    res.json({ mensaje: 'Empleado eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el empleado' });
  }
};