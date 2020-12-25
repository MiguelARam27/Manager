import User from '../models/UserModel.js';
import Employee from '../models/EmployeeProfile.js';
import asyncHandler from 'express-async-handler';

//desc post employee profile info
// @route   employee /api/employee
// @access  Protected
const employeeProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const { name, email, phone, schedule } = req.body;

    const profileFields = {
      name,
      email,
      phone,
      schedule,
    };

    let employeeProfile = await Employee.findOneAndUpdate(
      { user: req.user._id },
      { $set: profileFields },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    await employeeProfile.save();
    return res.json(employeeProfile);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export { employeeProfile };
