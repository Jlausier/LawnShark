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
  reviews: [
    {
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
    },
  ],
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
