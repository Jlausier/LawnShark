const { Schema, model } = require('mongoose');

const postingSchema = new Schema(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: 'Service'
    },
    price: {
      type: Number
    },
    location: {
      type: String,
      required: true
    },
    bids: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Bid'
      }
    ],
    customer: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  }
);

const Posting = model('Posting', postingSchema);

module.exports = Posting;
