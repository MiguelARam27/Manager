import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema({
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Manager',
  },
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

export default Schedule;
