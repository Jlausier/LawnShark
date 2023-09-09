const { Schema, model } = require("mongoose");
const price = require("../utils/price");

const postingSchema = new Schema({
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
