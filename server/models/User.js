const { Schema, model } = require("mongoose");

const userSchema = new Schema({
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
  _customer: { type: Schema.Types.ObjectId, ref: "Customer" },
  _company: { type: Schema.Types.ObjectId, ref: "Company" },
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

userSchema.methods.getRole = function () {
  return this._company ? "company" : "customer";
};

const User = model("User", userSchema);

module.exports = User;
