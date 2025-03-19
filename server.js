const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = 3000;
// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs'); // Configura EJS como motor de plantillas

// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

const empresaRoutes = require('./routes/empresaRoutes.js');
const empleadoRoutes = require('./routes/empleadoRoutes.js');

// Conexión a la base de datos MongoDB
// Conexión a MongoDB
mongoose.connect('mongodb+srv://may:912@cluster0.6joyu.mongodb.net/gestionEmpresas')
    .then(() => console.log(' Conectado a MongoDB'))
    .catch(err => console.error(' Error al conectar a MongoDB:', err));

// Rutas
app.use('/api/empresas', empresaRoutes);
app.use('/api/empleados', empleadoRoutes);

// Definición del esquema y modelo de datos

app.use(express.json());

app.get('/', (req, res) => {
  res.render('index'); // Renderiza la vista index.ejs
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
