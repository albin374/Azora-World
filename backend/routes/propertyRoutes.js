import express from 'express';
import Property from '../models/Property.js';

const router = express.Router();

// Mock data in case DB isn't connected
const mockProperties = [
  {
    _id: '1',
    title: 'The Grand Vista',
    description: 'A spectacular villa with panoramic ocean views, private infinity pool, and world-class amenities.',
    pricePerNight: 2500,
    amenities: ['Infinity Pool', 'Private Chef', 'Helipad', 'Spa'],
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'],
    maxGuests: 10,
    location: 'Palm Jumeirah, Dubai'
  },
  {
    _id: '2',
    title: 'Azure Manor',
    description: 'Modern luxury nestled in nature. Features sprawling gardens and an open-concept design.',
    pricePerNight: 1800,
    amenities: ['Garden', 'Home Cinema', 'Gym', 'Tennis Court'],
    images: ['https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80'],
    maxGuests: 8,
    location: 'Beverly Hills, California'
  },
    {
    _id: '3',
    title: 'Royal Penthouse',
    description: 'The epitome of city luxury. Overlooking the skyline with exclusive elevator access.',
    pricePerNight: 3500,
    amenities: ['Skyline View', 'Butler Service', 'Private Elevator', 'Sauna'],
    images: ['https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80'],
    maxGuests: 4,
    location: 'Manhattan, New York'
  }
];

// @route   GET /api/properties
// @desc    Get all properties
// @access  Public
router.get('/', async (req, res) => {
  try {
    if (process.env.MONGO_URI) {
      const properties = await Property.find({});
      res.json(properties);
    } else {
      res.json(mockProperties);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route   GET /api/properties/:id
// @desc    Get a single property
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    if (process.env.MONGO_URI) {
      const property = await Property.findById(req.params.id);
      if (property) {
        res.json(property);
      } else {
        res.status(404).json({ message: 'Property not found' });
      }
    } else {
      const property = mockProperties.find(p => p._id === req.params.id);
      if (property) {
        res.json(property);
      } else {
        res.status(404).json({ message: 'Property not found' });
      }
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
