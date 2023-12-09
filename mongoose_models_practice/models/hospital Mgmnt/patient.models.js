import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  age:{
    type: Number,
    required: true,
  },
  gender:{
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
  },
  bloodgroup:{
    type: String,
    required: true,
  },
  address:{
    type: String,
    required: true,
  },
  diagnosedwith:{
    type: String,
    required: true,
  },
  admittedIn: {
    type: mongoose.Schema.Types.OrderId,
    ref: 'Hospital'
  }
},{timestamps:true});