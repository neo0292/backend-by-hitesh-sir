import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userName: {
      type: String,
      required: true,
      lowercase: true,
      unique: true

  },

  email:{
    type:String,
    required: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type:Boolean,
    required: true,
    default: false,
  }

});

export const User = mongoose.model("User",userSchema);