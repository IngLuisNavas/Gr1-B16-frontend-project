const { request, response } = require("express");
const express = require("express");

const app = express();
app.use(express.json());

app.get('/api/personas', (request, response) => {
    response.status(200).json(personas);
})

app.post('api/personas', (request, response) => {
    let persona = request.body;
    console.log(persona);
    personas.push(persona);
    response.status(201).json(personas);


})

app.get('/', (request, response) => {

    response.send("<h1>Hola Mundo</h1>");
});

app.listen(1600, () => {
    console.log("Conectado al servidor");
});

let personas = [{ nombre: "Laura Marcela", apellido: "Torres Diaz", edad: "21" },
    { nombre: "Jesus Emel", apellido: "Gomez Gomez", edad: "31" },
    { nombre: "Luis Eduardo", apellido: "Jerez Ruiz", edad: "33" },


];