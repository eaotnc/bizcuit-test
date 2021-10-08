const mongoose = require("mongoose");

const countSchema = new mongoose.Schema({
  randomCount: Number,
});

module.exports = mongoose.model("Count", countSchema);
