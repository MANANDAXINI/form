import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = "mongodb://localhost:27017/CMSHealthCaredb"; // Replace with your MongoDB URI if needed
    await mongoose.connect(mongoURI, 
     
    );
    console.log("MongoDB connected successfully to CMSHealthCaredb");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
