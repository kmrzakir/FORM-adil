import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      'mongodb+srv://malikaadil1225:17JFzaAv65tZfroh@cluster0.kyvof2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log("MongoDB connected successfully:", connection.connection.host);
  } catch (error) {
    console.log("MongoDB connection failed:", error);
    process.exit(1); // Exit the process if the connection fails
  }
};

export default connectDB;