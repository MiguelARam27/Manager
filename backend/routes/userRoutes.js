import express from 'express';
const router = express.Router();
import {
  registerUser,
  authUser,
  forgotPassword,
  resetPassword,
} from '../controllers/userController.js';

router.route('/').post(registerUser).get();
router.route('/login').post(authUser);
router.route('/resetpassword/:resettoken').put(resetPassword);
router.route('/forgotpassword').post(forgotPassword);

export default router;
