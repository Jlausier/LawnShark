const { Schema, model } = require("mongoose");

const customerSchema = new Schema({
  location: [
    {
      adress: {
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
  ],
  postings: [
    {
      type: Schema.Types.ObjectId,
      ref: "Posting",
    },
  ],
});

const Customer = model("Customer", customerSchema);

module.exports = Customer;
