import User from '../models/UserModel.js';
import Manager from '../models/ManagerProfile.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';

//desc get manager details
// @route   GET /api/manager
// @access  Public

//desc post manager info
// @route POST /api/manager
//@access protected
const managerProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const { name, email, phone, store } = req.body;

    const profileFields = {
      name,
      email,
      store,
      phone,
    };

    let managerProfile = await Manager.findOneAndUpdate(
      { user: req.user._id },
      { $set: profileFields },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    return res.json(managerProfile);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export { managerProfile };
