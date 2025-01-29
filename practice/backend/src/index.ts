import express from "express";
import cors from "cors";
import connectDB from "./db/dbconnection"; // Adjust path if necessary
import doctorRoutes from "./routes/doctor";
import patientRoutes from "./routes/patient";

const app = express();

// Enable CORS for frontend on localhost:5173
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests only from this origin (frontend)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
}));

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/doctors", doctorRoutes);
app.use("/api/patients", patientRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
