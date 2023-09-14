const { Schema, model } = require("mongoose");

const customerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zip: {
        type: String,
        required: true,
      },
    },
    postings: [
      {
        type: Schema.Types.ObjectId,
        ref: "Posting",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

customerSchema.virtual("readableAddress").get(function () {
  const { address, city, state, zip } = this.location;
  return `${address}, ${city}, ${state} ${zip}`;
});

const Customer = model("Customer", customerSchema);

module.exports = Customer;
