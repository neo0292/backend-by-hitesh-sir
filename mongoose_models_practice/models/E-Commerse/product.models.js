import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    unique: true
  },
  description:{
    type: String,
    required: true,
  },
  productImage:{
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true,
    default: 0,
  },
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Category',
  },
  availabel:{
    type: Boolean,
    default: false,
  },
  stock: {
    type: Number,
    default: 0,
  },
},{timestamps: true});

export const Product = mongoose.model('Product', productSchema);