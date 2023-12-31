const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  reviewText: {
    type: String,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  rating: {
    type: Number,
    maxlength: 1,
    match: /[0-5]/,
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
  },
});

const companySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: "You need to leave a description!",
      minlength: 1,
      maxlength: 500,
      trim: true,
    },
    _user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    services: [
      {
        type: Schema.Types.ObjectId,
        ref: "Service",
      },
    ],
    reviews: [reviewSchema],
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

companySchema.virtual("averageRating").get(function () {
  return this.reviews.length > 0
    ? this.reviews.reduce((prev, curr) => prev + curr, 0) / this.reviews.length
    : -1;
});

companySchema.virtual("reviewCount").get(function () {
  return this.reviews.length;
});

const Company = model("Company", companySchema);

module.exports = Company;
