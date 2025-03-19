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

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb+srv://<may>:<912>@cluster0.6joyu.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conexión al servidor exitosa');
})
.catch((err) => {
  console.error('Error al conectar al servidor:', err);
});

// Definición del esquema y modelo de datos
const notaSchema = new mongoose.Schema({
  titulo: String,
  hora : String,
  contenido: String
});

const Nota = mongoose.model('Nota', notaSchema);

app.use(express.json());

// Maneja la solicitud POST para guardar la nota
app.post('/guardarNota', (req, res) => {
  // Código para guardar la nota en la base de datos
  // ...

  // Ejemplo de respuesta
  res.status(200).send('Nota guardada exitosamente');
});

app.get('/obtenerNotas', (req, res) => {
  // Código para obtener las notas de la base de datos
  // ...

  // Ejemplo de respuesta
  const notas = [{ titulo: 'Nota 1', contenido: 'Contenido de la nota 1', hora: '12:00' }];
  res.status(200).json(notas);
});

app.get('/', (req, res) => {
  res.render('index'); // Renderiza la vista index.ejs
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
