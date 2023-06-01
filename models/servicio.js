import mongoose from 'mongoose';

const { Schema } = mongoose;

const servicioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  duracion: {
    type: Number,
    required: true,
  },
});

const Servicio = mongoose.model('Servicio', servicioSchema);

export default Servicio;