import express from 'express';

import { protect } from '../middleware/authMiddleware.js';
import {
  employeeProfile,
  employeeProfileInfo,
} from '../controllers/employeeController.js';
const router = express.Router();

router
  .route('/')
  .post(protect, employeeProfile)
  .get(protect, employeeProfileInfo);

export default router;
