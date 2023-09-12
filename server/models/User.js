const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
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
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual("userRole").get(function () {
  if (this._company) {
    this.populate("_company");
    return {
      role: "company",
      _id: this._company._id,
    };
  } else if (this._customer) {
    this.populate("_customer");
    return {
      role: "customer",
      _id: this._customer._id,
    };
  } else {
    return {
      role: "none",
      _id: "",
    };
  }
});

const User = model("User", userSchema);

module.exports = User;
