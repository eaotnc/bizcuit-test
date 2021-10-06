const mongoose = require("mongoose");

const beerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: String,
  qty: Number,
  price: Number,
});

module.exports = mongoose.model("Beer", beerSchema);
