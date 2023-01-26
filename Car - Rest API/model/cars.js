const mongoose = require("mongoose");

const CarScheme = mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
  },
  color: {
    type: String,
    default: "Black",
  },
  acceleration: {
    type: Number,
    min: [0, "must be at least 0"],
    max: 100,
  },
  max: Number,
  description: {
    type: String,
    minLength: 20,
  },
  Supply: Number,
});

module.exports = mongoose.model("Car", CarScheme);
