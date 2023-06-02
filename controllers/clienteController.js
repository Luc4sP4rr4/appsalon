// import Cliente from '../models/cliente.js';

// const clienteController = {
//   getAllClientes: async (req, res) => {
//     try {
//       const clientes = await Cliente.find();
//       res.json(clientes);
//     } catch (error) {
//       res.status(500).json({ message: 'Error al obtener los clientes' });
//     }
//   },

//   getClienteById: async (req, res) => {
//     try {
//       const cliente = await Cliente.findById(req.params.id);
//       if (!cliente) {
//         return res.status(404).json({ message: 'Cliente no encontrado' });
//       }
//       res.json(cliente);
//     } catch (error) {
//       res.status(500).json({ message: 'Error al obtener el cliente' });
//     }
//   },

//   createCliente: async (req, res) => {
//     try {
//       const nuevoCliente = new Cliente(req.body);
//       const clienteGuardado = await nuevoCliente.save();
//       res.status(201).json(clienteGuardado);
//     } catch (error) {
//       res.status(500).json({ message: 'Error al crear el cliente' });
//     }
//   },

//   updateCliente : async (req, res) => {
//     try {
//       const clienteActualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//       });
//       if (!clienteActualizado) {
//         return res.status(404).json({ message: 'Cliente no encontrado' });
//       }
//       res.json(clienteActualizado);
//     } catch (error) {
//       res.status(500).json({ message: 'Error al actualizar el cliente' });
//     }
//   },

//   deleteCliente: async (req, res) => {
//     try {
//       const clienteEliminado = await Cliente.findByIdAndDelete(req.params.id);
//       if (!clienteEliminado) {
//         return res.status(404).json({ message: 'Cliente no encontrado' });
//       }
//       res.json({ message: 'Cliente eliminado correctamente' });
//     } catch (error) {
//       res.status(500).json({ message: 'Error al eliminar el cliente' });
//     }
//   },
// };

// export default clienteController;

import { Cliente } from '../models/cliente';

// Controlador para obtener todos los clientes
export const obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.obtenerTodosLosClientes();

    if (clientes.length === 0) {
      return res.status(200).json({
        mensaje: 'Aún no se han cargado clientes',
        cargarNuevoCliente: true,
      });
    }

    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los clientes' });
  }
};

// Controlador para obtener un cliente por su ID
export const obtenerClientePorId = async (req, res) => {
  try {
    const cliente = await Cliente.obtenerClientePorId(req.params.id);

    if (!cliente) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }

    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el cliente' });
  }
};

// Controlador para crear un nuevo cliente
export const crearCliente = async (req, res) => {
  try {
    const nuevoCliente = new Cliente(req.body);
    const clienteCreado = await nuevoCliente.guardarCliente();

    res.status(201).json(clienteCreado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el cliente' });
  }
};

// Controlador para actualizar un cliente por su ID
export const actualizarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.obtenerClientePorId(req.params.id);

    if (!cliente) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }

    cliente.nombre = req.body.nombre;
    cliente.apellido = req.body.apellido;
    cliente.telefono = req.body.telefono;
    cliente.redSocial = req.body.redSocial;

    const clienteActualizado = await cliente.guardarCliente();

    res.status(200).json(clienteActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el cliente' });
  }
};

// Controlador para eliminar un cliente por su ID
export const eliminarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.obtenerClientePorId(req.params.id);

    if (!cliente) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }

    await cliente.eliminarCliente();

    res.status(200).json({ mensaje: 'Cliente eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el cliente' });
  }
};

// Resto de los controladores de clientes...

