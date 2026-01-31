const mongoose = require('mongoose');

const productSchema = new mongoose.schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
    maxLength: [100, "Product name cannot exceed 100 characters"]
  },
  price: {
    type: Number,
    default: 0.0
  },
  description: {
    type: String,
    required: [true, "Please enter product description"]
  },
  ratings: {
    type: String,
    default: 0
  },
  images: [{
    image: {
      type: String,
      required: [true,"Please provide product images"]
    }
  }],
  category: {
    type: String,
    required: [true, "Please provide product category"],
    enum: {
      values: [
        'Electronics',
        'MobilrPhone',
        'Laptops',
        'Accessories',
        'Headphones',
        'Food',
        'Books',
        'Clothes/Shoes',
        'Beauty/Health',
        'Sports',
        'Outdoor',
        'Home'
      ],
      message: "Please select only allowed categories"
    }
  },
  seller: {
    type: String,
    requred: [true, "Please enter product seller"]
  },
  stock: {
    type: Number,
    required: [true,"Please enter product stocks"],
    maxLengh: [20,"Product stocks are limited to 20"]
  },
  numOfReviews: {
    type: Number,
    default: 0
  },
  reviews: [
    {
      name: {
        type: String,
        required: true
      },
      rating: {
        type: String,
        required: true
      },
      comment: {
        type: String,
        required: true
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

let schema = mongoose.model('Product',productSchema)

module.exports = schema
