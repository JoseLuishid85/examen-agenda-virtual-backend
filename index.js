import express from "express";
import cors from 'cors';
import clienteRoutes from './router/clienteRouter.js'

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000

app.use('/api/cliente', clienteRoutes);

const servidor = app.listen(PORT, () =>{
    console.log(`Servidor Corriendo en el puerto ${PORT}`);
})