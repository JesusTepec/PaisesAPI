const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const port = 3300;
const mongoose = require('mongoose');

var paises = require("./api/models/paises_model");
const server = require("http").createServer(app);
const paisesRouter = require("./api/routes/paises_routes");

let dev_db_url = 'mongodb://localhost:27017/paisesdb';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB)
    .then(() => {
        // Cuando se realiza la conexión, lanzamos este mensaje por consola
        console.log("La conexión a la base de datos  se ha realizado correctamente")

        // CREAR EL SERVIDOR WEB CON NODEJS
        server.listen( port, () => {
          console.log("Servidor ejecutandose: localhost:" + port);
        });
    })
    // Si no se conecta correctamente escupimos el error
    .catch(err => console.log(err));

app.get("/", (request, response) => {
  response.sendFile( path.join(__dirname, "index.html"));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/paises", paisesRouter);
