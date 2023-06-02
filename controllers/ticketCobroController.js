import TicketCobro from '../models/ticketcobro.js';

const ticketCobroController = {
  getAllTicketsCobro: async (req, res) => {
    try {
      const ticketsCobro = await TicketCobro.find();
      res.json(ticketsCobro);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los tickets de cobro' });
    }
  },

  getTicketCobroById: async (req, res) => {
    try {
      const ticketCobro = await TicketCobro.findById(req.params.id);
      if (!ticketCobro) {
        return res.status(404).json({ message: 'Ticket de cobro no encontrado' });
      }
      res.json(ticketCobro);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el ticket de cobro' });
    }
  },

  createTicketCobro: async (req, res) => {
    try {
      const nuevoTicketCobro = new TicketCobro(req.body);
      const ticketCobroGuardado = await nuevoTicketCobro.save();
      res.status(201).json(ticketCobroGuardado);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el ticket de cobro' });
    }
  },

  updateTicketCobro: async (req, res) => {
    try {
      const ticketCobroActualizado = await TicketCobro.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!ticketCobroActualizado) {
        return res.status(404).json({ message: 'Ticket de cobro no encontrado' });
      }
      res.json(ticketCobroActualizado);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el ticket de cobro' });
    }
  },

  deleteTicketCobro: async (req, res) => {
    try {
      const ticketCobroEliminado = await TicketCobro.findByIdAndDelete(req.params.id);
      if (!ticketCobroEliminado) {
        return res.status(404).json({ message: 'Ticket de cobro no encontrado' });
      }
      res.json({ message: 'Ticket de cobro eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el ticket de cobro' });
    }
  },
};

export default ticketCobroController;
