const express = require("express");

const app = express();
app.use(express.json());


app.get('/', (request, response) => {

    response.send("<h1>Hola Mundo</h1>");
});

app.listen(1600, () => {
    console.log("Conectado al servidor");
});