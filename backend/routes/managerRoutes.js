import express from 'express';
import {
  managerProfile,
  getProfileInfo,
  createEmployee,
  removeEmployee,
} from '../controllers/managerController.js';
import { protect, isManager } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').post(protect, managerProfile).get(protect, getProfileInfo);
router.route('/employees').post(protect, isManager, createEmployee);

router.route('/employees/:id').delete(protect, isManager, removeEmployee);

export default router;
