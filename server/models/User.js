const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  reviewText: {
    type: String,
    required: true,
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
});

const companySchema = new Schema({
  description: {
    type: String,
    required: "You need to leave a description!",
    minlength: 1,
    maxlength: 500,
    trim: true,
  },
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: "Service",
    },
  ],
  reviews: [reviewSchema],
});

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  isCompany: {
    type: Boolean,
    required: true,
    default: false,
  },
  customer: customerSchema,
  company: companySchema,
});

//password logic
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
