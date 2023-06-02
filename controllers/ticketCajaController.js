import TicketCaja from '../models/ticketcaja.js';

const ticketCajaController = {
  getAllTicketsCaja: async (req, res) => {
    try {
      const ticketsCaja = await TicketCaja.find();
      res.json(ticketsCaja);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los tickets de caja' });
    }
  },

  getTicketCajaById: async (req, res) => {
    try {
      const ticketCaja = await TicketCaja.findById(req.params.id);
      if (!ticketCaja) {
        return res.status(404).json({ message: 'Ticket de caja no encontrado' });
      }
      res.json(ticketCaja);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el ticket de caja' });
    }
  },

  createTicketCaja: async (req, res) => {
    try {
      const nuevoTicketCaja = new TicketCaja(req.body);
      const ticketCajaGuardado = await nuevoTicketCaja.save();
      res.status(201).json(ticketCajaGuardado);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el ticket de caja' });
    }
  },

  updateTicketCaja: async (req, res) => {
    try {
      const ticketCajaActualizado = await TicketCaja.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!ticketCajaActualizado) {
        return res.status(404).json({ message: 'Ticket de caja no encontrado' });
      }
      res.json(ticketCajaActualizado);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el ticket de caja' });
    }
  },

  deleteTicketCaja: async (req, res) => {
    try {
      const ticketCajaEliminado = await TicketCaja.findByIdAndDelete(req.params.id);
      if (!ticketCajaEliminado) {
        return res.status(404).json({ message: 'Ticket de caja no encontrado' });
      }
      res.json({ message: 'Ticket de caja eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el ticket de caja' });
    }
  },
};

export default ticketCajaController;
