import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true    
  },
  complete:{
    type: Boolean,
    default: false
  },
  createdby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // here we give ref of Model
  },
  subtodo: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:"SubTodo",
  }],
},{timestamps: true});

export const Todo =  mongoose.Schema("Todo", todoSchema);