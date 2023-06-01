import mongoose from 'mongoose';

const { Schema } = mongoose;

const productoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: true,
  },
  precioCosto: {
    type: Number,
    required: true,
  },
  precioPublico: {
    type: Number,
    required: true,
  },
});

const Producto = mongoose.model('Producto', productoSchema);

export default Producto;