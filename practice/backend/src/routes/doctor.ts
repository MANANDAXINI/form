import express from "express";
import { doctorSignup, doctorSignin } from "../controller/doctorController";

const router = express.Router();

// Doctor Signup Route
router.post("/signup", doctorSignup);

// Doctor Signin Route
router.post("/signin", doctorSignin);

export default router;
