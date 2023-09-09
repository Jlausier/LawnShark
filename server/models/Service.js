const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const Service = model("Service", serviceSchema);

module.exports = Service;
