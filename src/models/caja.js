import mongoose from 'mongoose';

const cajaSchema = new mongoose.Schema({
  montoInicial: {
    type: Number,
    required: true,
  },
  cerrada: {
    type: Boolean,
    default: false,
  },
  fechaApertura: {
    type: Date,
    default: Date.now,
  },
  fechaCierre: {
    type: Date,
    default: null,
  },
});

const Caja = mongoose.model('Caja', cajaSchema);

export default Caja;
