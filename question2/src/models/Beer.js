const mongoose = require("mongoose");

const beerSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  style: {
    type: String,
    required: true,
  },
  hop: {
    type: String,
    required: true,
  },
  yeast: {
    type: String,
    required: true,
  },
  malts: {
    type: String,
    required: true,
  },
  ibu: {
    type: String,
    required: true,
  },
  alcohol: {
    type: String,
    required: true,
  },
  blg: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Beer", beerSchema);
