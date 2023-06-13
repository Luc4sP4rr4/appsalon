import mongoose from 'mongoose';

const { Schema } = mongoose;

const ticketCobroSchema = new Schema({
  servicio: {
    type: Schema.Types.ObjectId,
    ref: 'Servicio',
    required: true,
  },
  valorServicio: {
    type: Number,
    required: true,
  },
  productos: [{
    producto: {
      type: Schema.Types.ObjectId,
      ref: 'Producto',
      required: true,
    },
    valorProducto: {
      type: Number,
      required: true,
    },
  }],
  empleado: {
    type: Schema.Types.ObjectId,
    ref: 'Empleado',
    required: true,
  },
  montoTotal: {
    type: Number,
    required: true,
  },
  metodoPago: {
    type: String,
    enum: ['Efectivo', 'Débito'],
    required: true,
  },
});

const TicketCobro = mongoose.model('TicketCobro', ticketCobroSchema);

export default TicketCobro;