const mongoose = require("mongoose");

const randomCountSchema = new mongoose.Schema({
  randomCount: Number,
});

module.exports = mongoose.model("RandomCount", randomCountSchema);
