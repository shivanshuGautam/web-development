import express from "express";
import {
  loginuser,
  logoutuser,
  Registeruser,
} from "../controllers/auth.controller.js";

import{
  sampleMiddleWare,
  sampleMiddleWare2
} from "../middlewares/auth.middleware.js"

const router = express.Router();
router.post("/login", sampleMiddleWare,sampleMiddleWare2, loginuser);
router.post("/logout",  sampleMiddleWare,sampleMiddleWare2, logoutuser);
router.post("/register", sampleMiddleWare,sampleMiddleWare2, Registeruser);

export default router;
