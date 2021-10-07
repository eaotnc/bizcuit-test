const express = require("express");
const app = express();
const cors = require("cors");
const BodyParser = require("body-parser");
const BeerRoutes = require("./routes/BeerRoutes");

app.use(cors());
// parse application/json
app.use(BodyParser.json());

app.use("/api/beer", BeerRoutes);

module.exports = app;
