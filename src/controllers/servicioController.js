import Servicio from '../models/servicio.js';

const servicioController = {
  getAllServicios: async (req, res) => {
    try {
      const servicios = await Servicio.find();
      res.json(servicios);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los servicios' });
    }
  },

  getServicioById: async (req, res) => {
    try {
      const servicio = await Servicio.findById(req.params.id);
      if (!servicio) {
        return res.status(404).json({ message: 'Servicio no encontrado' });
      }
      res.json(servicio);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el servicio' });
    }
  },

  createServicio: async (req, res) => {
    try {
      const nuevoServicio = new Servicio(req.body);
      const servicioGuardado = await nuevoServicio.save();
      res.status(201).json(servicioGuardado);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el servicio' });
    }
  },

  updateServicio: async (req, res) => {
    try {
      const servicioActualizado = await Servicio.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!servicioActualizado) {
        return res.status(404).json({ message: 'Servicio no encontrado' });
      }
      res.json(servicioActualizado);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el servicio' });
    }
  },

  deleteServicio: async (req, res) => {
    try {
      const servicioEliminado = await Servicio.findByIdAndDelete(req.params.id);
      if (!servicioEliminado) {
        return res.status(404).json({ message: 'Servicio no encontrado' });
      }
      res.json({ message: 'Servicio eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el servicio' });
    }
  },
};

export default servicioController;
