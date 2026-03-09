import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const URL = process.env.MONGODB_URL; // yahan read karo

    console.log("Trying to connect...");
    console.log("URL:", URL);

    await mongoose.connect(URL);

    console.log("✅ Connection successful to MongoDB");
  } catch (error) {
    console.error("❌ Database connection failed:");
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDb;