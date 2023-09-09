const price = {
  type: Number,
  get: function (amount) {
    return (amount / 100).toFixed(2);
  },
  set: function (amount) {
    return amount * 100;
  },
};

module.exports = price;
