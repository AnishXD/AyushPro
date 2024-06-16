import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import connectToDatabase from './Mongodb/connect.js';
import Hospital from './Mongodb/model/schema.js';
import * as dotenv from 'dotenv';
import { hospitals } from './constants/constant.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Connect to MongoDB
await connectToDatabase();

// Function to seed the database
const seedDatabase = async () => {
    try {
        await Hospital.deleteMany({}) // Increase timeout to 60 seconds
        await Hospital.insertMany(hospitals);
        console.log('Database seeded successfully');
    } catch (err) {
        console.error('Error seeding database:', err);
        process.exit(1); // Exit with error code if seeding fails
    }
};

// Call the seeding function
seedDatabase();

// Routes 
app.get('/api/hospitals', async (req, res) => {
    try {
        const { location, services, specialties } = req.query;

        // Build the filter object
        let filter = {};
        if (location) {
            filter.location = { $regex: location, $options: 'i' }; // Case-insensitive match
        }
        if (services) {
            const servicesArray = services.split(',');
            filter.services = { $in: servicesArray };
        }
        if (specialties) {
            const specialtiesArray = specialties.split(',');
            filter.specialties = { $in: specialtiesArray };
        }

        const hospitals = await Hospital.find(filter);
        res.json(hospitals);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Define the port to run the server
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
