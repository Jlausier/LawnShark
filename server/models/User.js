const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    customer: [
      {
        postings: [
          {
            type: Schema.Types.ObjectId,
            ref: 'Posting'
          }
        ],
      }
    ],
    company: [
      {
        description: {
          type: String,
          required: 'You need to leave a description!',
          minlength: 1,
          maxlength: 500,
          trim: true,
        },
        services: [
          {
            type: Schema.Types.ObjectId,
            ref: 'Service'
          }
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
              match: /[0-5]/

            }

          }
        ]
      }
    ]
  }
);

const User = model('User', userSchema);

module.exports = User;
