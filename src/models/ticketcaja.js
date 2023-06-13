import mongoose from 'mongoose';

const { Schema } = mongoose;

const ticketCajaSchema = new Schema({
  tipo: {
    type: String,
    enum: ['Apertura', 'Cierre'],
    required: true,
  },
  encargado: {
    type: Schema.Types.ObjectId,
    ref: 'Empleado',
    required: true,
  },
  montoIngreso: {
    type: Number,
    required: true,
  },
  montoEgreso: {
    type: Number,
    required: true,
  },
  montoEfectivo: {
    type: Number,
    required: true,
  },
  montoDebito: {
    type: Number,
    required: true,
  },
});

const TicketCaja = mongoose.model('TicketCaja', ticketCajaSchema);

export default TicketCaja;