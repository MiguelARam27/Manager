import mongoose from 'mongoose';

const EmployeeProfileSchema = new mongoose.Schema({
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
  monday: {
    startTime: {
      type: Number,
    },
    endTime: {
      type: Number,
    },
  },
  tuesday: {
    startTime: {
      type: Number,
    },
    endTime: {
      type: Number,
    },
  },
  wednesday: {
    startTime: {
      type: Number,
    },
    endTime: {
      type: Number,
    },
  },
  thursday: {
    startTime: {
      type: Number,
    },
    endTime: {
      type: Number,
    },
  },
  friday: {
    startTime: {
      type: Number,
    },
    endTime: {
      type: Number,
    },
  },
  saturday: {
    startTime: {
      type: Number,
    },
    endTime: {
      type: Number,
    },
  },
  sunday: {
    startTime: {
      type: Number,
    },
    endTime: {
      type: Number,
    },
  },
});
const Employee = mongoose.model('Employee', EmployeeProfileSchema);

export default Employee;
