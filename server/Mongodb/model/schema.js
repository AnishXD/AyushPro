import mongoose from 'mongoose';

const { Schema } = mongoose;

const hospitalSchema = new Schema({
    id: { type: String },
    name: { type: String },
    location: { type: String },
    specialties: { type: [String] },
    rating: { type: Number },
    contact: {
        phone: { type: String },
        email: { type: String }
    },
    imageUrl: { type: String },
    about: { type: String },
    website: { type: String },
    hoursOfOperation: {
        MonFri: { type: String },
        Sat: { type: String },
        Sun: { type: String }
    },
    services: { type: [String] }
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

export default Hospital;
