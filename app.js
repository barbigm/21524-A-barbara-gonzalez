// ! Lógica de config del servidor
// Importaciones de módulos
const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();
require('ejs');

const { sequelize , conectarDB } = require('./database');

const app = express()
const port = process.env.PORT || 4000;

conectarDB();


// Middlewares
app.use(cors( {
    // origin: "*" // Cualquiera puede realizar peticiones
    origin: "http://localhost:4000"
}));
app.use(morgan("dev"))
app.use(express.json()) // Para que el servidor comprenda datos en formato json

app.set('view engine', 'ejs')

// Archivos estáticos - (carpeta pública)
app.use(express.static(path.join(__dirname, 'public')))

// Rutas
app.use(require('./routes/blog.routes'))



// Servidor en escucha
app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))