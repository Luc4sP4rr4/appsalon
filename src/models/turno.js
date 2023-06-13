import mongoose from 'mongoose';

const turnoSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  paciente: {
    type: String,
    required: true,
  },
});

const Turno = mongoose.model('Turno', turnoSchema);

export default Turno;
