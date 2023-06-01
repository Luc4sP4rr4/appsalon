import mongoose from 'mongoose';

const { Schema } = mongoose;

const empleadoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  comision: {
    type: Number,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  redSocial: {
    type: String,
    required: true,
  },
});

const Empleado = mongoose.model('Empleado', empleadoSchema);

export default Empleado;