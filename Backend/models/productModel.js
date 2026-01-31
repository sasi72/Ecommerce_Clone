const mongoose = require('mongoose');

const productSchema = new mongoose.schema({
  name: {
    type: string,
    required: [true, "Please enter product name"],
    trim: true,
    maxLength: [100, "Product name cannot exceed 100 characters"]
  }
})
