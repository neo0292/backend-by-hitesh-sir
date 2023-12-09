import mongoose from 'mongoose';

const subTodo = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  content: {
    type: String,
    required: true,
    lowercase: true,
  },

  completed: {
    type: 'boolean',
    default: false,

  },

  createdby:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  }


}, {timestamps: true});

export const SubTodo = mongoose.model("SubTodo",subTodo);