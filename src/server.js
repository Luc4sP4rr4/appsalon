import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import empleadosRoutes from './routes/empelados.routes.js'

dotenv.config()

const app = express();
const port = process.env.PORT || 3500;

//midleware

app.use('/api',empleadosRoutes)

//routes
app.get('/',(req, res)=>{res.send('hola a la api')
})


//conexion DB

mongoose.connect(process.env.DB_URI)
.then(()=>{console.log('conected to db')})
.catch((error)=>console.error(error))


app.listen(port , ()=>console.log('server listening on port',port))