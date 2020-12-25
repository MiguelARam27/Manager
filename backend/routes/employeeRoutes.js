import express from 'express';

import { protect } from '../middleware/authMiddleware.js';
import { employeeProfile } from '../controllers/employeeController.js';
const router = express.Router();

router.route('/').post(protect, employeeProfile);

export default router;
