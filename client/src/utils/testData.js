export const posting = {
  _id: "",
  title: "#title",
  service: {
    _id: "",
    name: "#service",
  },
  askingPrice: 120.0,
  estimatePrice: 150.0,
  bids: [
    {
      _id: "",
      amount: 140.0,
      company: {
        _id: "",
        name: "",
      },
    },
  ],
  customer: {
    _id: "",
    name: "#name",
    location: "#location",
  },
  description: "#description",
  frequency: "#frequency",
};

export const company = {
  _id: "",
  email: "#test@email.com",
  password: "#password",
  _company: {
    _id: "",
    name: "#companyName",
    description: "#description",
    services: [
      {
        _id: "",
        name: "#serviceName",
      },
    ],
    reviews: [
      {
        reviewText: "#reviewText",
        createdAt: "#createdAt",
        rating: 5,
        customer: {
          _id: "",
          name: "#customerName",
        },
      },
    ],
  },
};

export const review = {
  reviewText: "#reviewText",
  createdAt: "#createdAt",
  rating: 5,
  customer: {
    _id: "",
    name: "#customerName",
    location: "#customerLocation",
  },
};
