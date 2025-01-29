import express from "express";
import { patientSignup, patientSignin } from "../controller/patientController";

const router = express.Router();

// Patient Signup Route
router.post("/signup", patientSignup);

// Patient Signin Route
router.post("/signin", patientSignin);

export default router;
