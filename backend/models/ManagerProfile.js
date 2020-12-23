import mongoose from 'mongoose';

const ManagerProfileSchema = new mongoose.Schema({
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
      employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        unique: true,
      },
    },
  ],
  schedule: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Schedule',
  },
});

const Manager = mongoose.model('Manager', ManagerProfileSchema);
export default Manager;
