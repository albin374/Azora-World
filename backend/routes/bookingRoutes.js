import express from 'express';
import Booking from '../models/Booking.js';

const router = express.Router();

let mockBookings = [];

// @route   POST /api/bookings
// @desc    Create a new booking
// @access  Public
router.post('/', async (req, res) => {
  const { propertyId, guestName, email, checkInDate, checkOutDate, totalPrice } = req.body;

  if (!propertyId || !guestName || !email || !checkInDate || !checkOutDate || !totalPrice) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    if (process.env.MONGO_URI) {
      const booking = new Booking({
        propertyId,
        guestName,
        email,
        checkInDate,
        checkOutDate,
        totalPrice
      });
      const createdBooking = await booking.save();
      res.status(201).json(createdBooking);
    } else {
      const newBooking = {
        _id: Math.random().toString(36).substr(2, 9),
        propertyId,
        guestName,
        email,
        checkInDate,
        checkOutDate,
        totalPrice,
        status: 'pending',
        createdAt: new Date().toISOString()
      };
      mockBookings.push(newBooking);
      res.status(201).json(newBooking);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
