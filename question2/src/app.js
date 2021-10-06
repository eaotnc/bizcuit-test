const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const beerRoutes = require("./routes/beerRoutes");

// parse application/json
app.use(BodyParser.json());

app.use("/api/beer", beerRoutes);

module.exports = app;
