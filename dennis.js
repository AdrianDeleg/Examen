function holaMundo() {
    return "Hola Mundo";
}

console.log(holaMundo());

//Cambios en dennis.js
module.exports = holaMundo;
const dennis = require('./dennis');
console.log(dennis());
const express = require('express'); // importar express
require('dotenv').config(); // cargar variables de entorno desde .env


const app = express(); // crear la app
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hola Mundo desde Express');
});
