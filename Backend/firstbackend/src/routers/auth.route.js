import express from 'express';
import{
    loginuser ,
    logoutuser,
    Registeruser,
} from "../controllers/auth.controller.js"

const router = express.Router();

router.post("/login" ,   loginuser );
router.post("/register" ,  logoutuser,);
router.post("/logout" ,  Registeruser);

export default router;