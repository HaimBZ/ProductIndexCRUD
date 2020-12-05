import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  productText: String,
  productPrice: Number,
  productDesc: String
});

export default mongoose.model('Product', Schema);
