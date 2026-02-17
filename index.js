// index.js
const express = require('express');
const dotenv = require('dotenv');

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Crear una instancia de la aplicación Express
const app = express();

// Definir el puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;  // Si no está en el .env, usará el puerto 3000

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde Express!');
});

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
