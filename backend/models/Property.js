import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pricePerNight: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String],
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  maxGuests: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const Property = mongoose.model('Property', propertySchema);
export default Property;
