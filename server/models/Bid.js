const { Schema, model } = require("mongoose");

const bidSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
  },
  posting: {
    type: Schema.Types.ObjectId,
    ref: "Posting",
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
  },
  accepted: {
    type: Boolean,
    default: false,
  }
});

const Bid = model("Bid", bidSchema);

module.exports = Bid;
