const express = require('express'); // importar express
require('dotenv').config(); // cargar variables de entorno desde .env

const app = express(); // crear la app

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log("Servidor escuchando el puerto " + process.env.PORT);
});