const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const BeerRoutes = require("./routes/BeerRoutes");

// parse application/json
app.use(BodyParser.json());

app.use("/api/beer", BeerRoutes);

module.exports = app;
