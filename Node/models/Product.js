const mongoose = require('mongoose');

const Product = new mongoose.Schema({
  product: {
    type: String,
    required: true
  },
  type: {
    type: String
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  code: {
    type: String,
    required: true
  },
  productImage: {
    type: Array
  },

});

module.exports = mongoose.model('products', Product);