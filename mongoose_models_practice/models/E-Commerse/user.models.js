import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userName:{
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  email:{
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password:{
    type: String,
    required: true,// min and max character?
  },
  address_line_1:{
    type: String,
    required: true,
  },
  address_line_2:{
    type: String,
  },
  pincode:{
    type: String,
    required: true,
  }
},{timestamps: true});

export const User = mongoose.model("User",userSchema)