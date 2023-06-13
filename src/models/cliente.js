import mongoose from 'mongoose';

const { Schema } = mongoose;

const clienteSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
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
  peluquero: {
    type: Schema.Types.ObjectId,
    ref: 'Empleado',
  },
});

const Cliente = mongoose.model('Cliente', clienteSchema);

export default Cliente;