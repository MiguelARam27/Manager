import User from '../models/UserModel.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import sendEmail from '../utils/sendEmail.js';
import crypto from 'crypto';
import { token } from 'morgan';

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
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    const resetUrl = `${req.protocol}://${req.get(
      'host'
    )}/api/users/reset/${resetToken}`;

    const message = `you are recieveing this message to \n\n ${resetUrl}`;

    try {
      await sendEmail({
        email: user.email,
        subject: 'password reset token',
        message,
      });

      res.json({ success: true, data: 'email sent' });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save({ validateBeforeSave: false });
      res.status(500);
      console.log(error);
      throw new Error('Email could not be sent');
    }
  } else {
    res.status(401);
    throw new Error('No user found with that email');
  }
});

//desc reset Password
//@route PUT /api/users/forgotpassword/:resettoken
//@access public
const resetPassword = asyncHandler(async (req, res) => {
  console.log(req.params.resettoken);
  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.resettoken)
    .digest('hex');

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });
  console.log(user);
  if (user) {
    //set new pasword
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    res.json(user);
  } else {
    res.status(401);
    throw new Error('invalid token');
  }
});

export { registerUser, authUser, forgotPassword, resetPassword };
