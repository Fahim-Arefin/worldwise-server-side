//define a city model
const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  cityName: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  emoji: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  position: {
    lat: {
      type: String,
      required: true,
    },
    lng: {
      type: String,
      required: true,
    },
  },
});

const City = mongoose.model("City", citySchema);

module.exports = City;
