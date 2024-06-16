import { connect } from 'mongoose';
import * as dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGODB_URI;

const connectToDatabase = async () => {
    try {
        await connect(mongoURI);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        // Exit process on failure
        process.exit(1);
    }
};

export default connectToDatabase;
