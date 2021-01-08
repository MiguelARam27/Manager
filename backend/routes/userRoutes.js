import express from 'express';
const router = express.Router();
import {
  registerUser,
  authUser,
  forgotPassword,
} from '../controllers/userController.js';

router.route('/').post(registerUser).get();
router.route('/login').post(authUser);
router.route('/forgotpassword').post(forgotPassword);

export default router;
