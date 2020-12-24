import express from 'express';
import { managerProfile } from '../controllers/managerController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').post(protect, managerProfile);

export default router;
