import Turno from '../models/turno.js';

// Controlador para obtener todos los turnos
export const obtenerTurnos = async (req, res) => {
  try {
    const turnos = await Turno.find();
    res.json(turnos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los turnos' });
  }
};

// Controlador para crear un nuevo turno
export const crearTurno = async (req, res) => {
  try {
    const { fecha, hora, paciente } = req.body;
    const nuevoTurno = new Turno({ fecha, hora, paciente });
    await nuevoTurno.save();
    res.status(201).json(nuevoTurno);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el turno' });
  }
};

// Controlador para actualizar un turno existente
export const actualizarTurno = async (req, res) => {
  try {
    const { id } = req.params;
    const { fecha, hora, paciente } = req.body;
    const turnoActualizado = await Turno.findByIdAndUpdate(
      id,
      { fecha, hora, paciente },
      { new: true }
    );
    res.json(turnoActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el turno' });
  }
};

// Controlador para eliminar un turno existente
export const eliminarTurno = async (req, res) => {
  try {
    const { id } = req.params;
    await Turno.findByIdAndDelete(id);
    res.json({ message: 'Turno eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el turno' });
  }
};
