import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import propertyRoutes from './routes/propertyRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Fake in-memory MongoDB for initial demonstration if no URI is provided
// In a real scenario, use mongoose.connect(process.env.MONGO_URI)
const connectDB = async () => {
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('MongoDB Connected');
    } else {
      console.log('No MONGO_URI provided, skipping MongoDB connection (using mock data in routes for now or it will fail on DB queries)');
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

connectDB();

app.use('/api/properties', propertyRoutes);
app.use('/api/bookings', bookingRoutes);

app.get('/', (req, res) => {
  res.send('Azora World API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
