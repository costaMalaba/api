import express from 'express';
import { SendReferral } from '../controllers/admin.js';

const router = express.Router();

router.post("/send", SendReferral);

export default router;