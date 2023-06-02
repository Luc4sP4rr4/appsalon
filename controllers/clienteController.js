import Cliente from '../models/cliente.js';

const clienteController = {
  getAllClientes: async (req, res) => {
    try {
      const clientes = await Cliente.find();
      res.json(clientes);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los clientes' });
    }
  },

  getClienteById: async (req, res) => {
    try {
      const cliente = await Cliente.findById(req.params.id);
      if (!cliente) {
        return res.status(404).json({ message: 'Cliente no encontrado' });
      }
      res.json(cliente);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el cliente' });
    }
  },

  createCliente: async (req, res) => {
    try {
      const nuevoCliente = new Cliente(req.body);
      const clienteGuardado = await nuevoCliente.save();
      res.status(201).json(clienteGuardado);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el cliente' });
    }
  },

  updateCliente: async (req, res) => {
    try {
      const clienteActualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!clienteActualizado) {
        return res.status(404).json({ message: 'Cliente no encontrado' });
      }
      res.json(clienteActualizado);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el cliente' });
    }
  },

  deleteCliente: async (req, res) => {
    try {
      const clienteEliminado = await Cliente.findByIdAndDelete(req.params.id);
      if (!clienteEliminado) {
        return res.status(404).json({ message: 'Cliente no encontrado' });
      }
      res.json({ message: 'Cliente eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el cliente' });
    }
  },
};

export default clienteController;