const { Schema, model } = require("mongoose");
const price = require("../utils/price");

const postingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  frequency: {
    type: String,
    required: true,
  },
  service: {
    type: Schema.Types.ObjectId,
    ref: "Service",
  },
  askingPrice: price,
  estimatePrice: price,
  bids: [
    {
      type: Schema.Types.ObjectId,
      ref: "Bid",
    },
  ],
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
  },
});

const Posting = model("Posting", postingSchema);

module.exports = Posting;
