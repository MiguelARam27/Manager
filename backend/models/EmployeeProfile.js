import mongoose from 'mongoose';

const EmployeeProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Manager',
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  schedule: {
    type: Object,
    monday: {
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
    tuesday: {
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
    wednesday: {
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
    thursday: {
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
    friday: {
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
    saturday: {
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
    sunday: {
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
    },
  },
});
const Employee = mongoose.model('Employee', EmployeeProfileSchema);

export default Employee;
