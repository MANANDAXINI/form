import mongoose, { Schema, Document } from "mongoose";

// Define the Patient schema interface
export interface PatientSignUpSchema extends Document {
  fullName: string;
  phone: string;
  email: string;
  password: string;
}

// Create the schema for the Patient
const PatientSignUpSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure no duplicate emails
  },
  password: {
    type: String,
    required: true,
  },
});

// Export the model
export const PatientSignUpModel = mongoose.model<PatientSignUpSchema>(
  "PatientSignUp",
  PatientSignUpSchema
);
