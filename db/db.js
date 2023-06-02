import mongoose from 'mongoose';

const mongoURI = 'mongodb://localhost:27017/nombre-de-tu-base-de-datos';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la base de datos de MongoDB');
    // Aquí puedes iniciar tu servidor Express o realizar otras operaciones después de establecer la conexión
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });