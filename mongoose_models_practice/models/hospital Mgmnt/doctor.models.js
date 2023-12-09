import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  qualifications: {
    type: String,
    required: true,
  },
  experienceInYears: {
    type: Number,
    default: 0,
  },
  salary:{
    type: String,
    required: true,
  },
  worksInHospitals: [
    {
      type: mongoose.Schema.Types.OrderId,
      ref: 'Hospital',
      required: true,
    },
  ]
},{timestamps:true});

export const Doctor = mongoose.model('Doctor', doctorSchema);