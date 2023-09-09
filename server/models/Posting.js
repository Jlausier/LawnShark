const { Schema, model } = require('mongoose');

const postingSchema = new Schema(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: 'Service'
    },
    askingPrice: {
      type: Number
    },
    estimatePrice: {
      type: Number
    },
    
    bids: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Bid'
    }],

    customer: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  });

const Posting = model('Posting', postingSchema);

module.exports = Posting;
