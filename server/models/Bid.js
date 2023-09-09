const { Schema, model } = require('mongoose');

const bidSchema = new Schema(
  {
    Amount: {
      type: Number,
      required: true
    },
    posting: {
      type: Schema.Types.ObjectId,
      ref: 'Posting'
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  }
);

const Bid = model('Bid', bidSchema);

module.exports = Bid;
