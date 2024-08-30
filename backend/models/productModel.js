const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    level1: {
      type: String,
      required: true,
    },
    level2: {
      type: String,
    },
    level3: {
      type: String,
    },
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  stock: {
    type: Number,
    required: true,
  },
  size:{
    type: Number,
    required:true,
  },
  HSN:{
    type: Number,
    required:true,
  },
  GST:{
    type: Number,
    required:true,
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
