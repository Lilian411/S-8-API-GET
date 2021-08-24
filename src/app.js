const express = require("express"); // importando express
const app = express(); // instanciando o express para acessar as funcionalidades contidas nele

// chama as rotas
const series = require("./routes/seriesRoutes")

// definir rota padrão
app.use("/series", series)

module.exports = app