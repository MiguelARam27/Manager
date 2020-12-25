import mongoose from 'mongoose';

const ManagerProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  store: {
    type: String,
  },
  employees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      unique: true,
    },
  ],
  schedule: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Schedule',
  },
});

const Manager = mongoose.model('Manager', ManagerProfileSchema);
export default Manager;
