import express from 'express';
import { contactus } from '../controllers/public.controller.js';

const router = express.Router();

router.post("/Contact-us",contactus);

export default router;