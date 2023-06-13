import Caja from '../models/caja.js';

// Controlador para abrir la caja
export const abrirCaja = async (req, res) => {
  try {
    const { montoInicial } = req.body;
    const nuevaCaja = new Caja({ montoInicial });
    await nuevaCaja.save();
    res.status(201).json(nuevaCaja);
  } catch (error) {
    res.status(500).json({ error: 'Error al abrir la caja' });
  }
};

// Controlador para cerrar la caja
export const cerrarCaja = async (req, res) => {
  try {
    const { id } = req.params;
    const caja = await Caja.findById(id);
    if (!caja) {
      return res.status(404).json({ error: 'Caja no encontrada' });
    }
    caja.cerrada = true;
    await caja.save();
    res.json(caja);
  } catch (error) {
    res.status(500).json({ error: 'Error al cerrar la caja' });
  }
};

// Controlador para obtener la información de la caja
export const obtenerCaja = async (req, res) => {
  try {
    const caja = await Caja.findOne({ cerrada: false });
    if (!caja) {
      return res.status(404).json({ error: 'No hay una caja abierta' });
    }
    res.json(caja);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la caja' });
  }
};
