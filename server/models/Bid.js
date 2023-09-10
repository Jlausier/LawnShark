const { Schema, model } = require("mongoose");

const bidSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  posting: {
    type: Schema.Types.ObjectId,
    ref: "Posting",
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
  },
});

const Bid = model("Bid", bidSchema);

module.exports = Bid;
