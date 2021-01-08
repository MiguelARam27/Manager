import User from '../models/UserModel.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

//desc Login a user
//@route POST/api/users/login
//@access public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      email: user.email,
      token: generateToken(user._id),
      isManager: user.isManager,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

//desc Forgot password
//@route POST /api/users/forgotpassword
//@access public
const forgotPassword = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    //get user token
    const token = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });
    res.json(user);
  } else {
    res.status(401);
    throw new Error('No user found with that email');
  }
});

export { registerUser, authUser, forgotPassword };
