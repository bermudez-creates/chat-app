import mongoose from 'mongoose';

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('Connected to database!');
  } catch (err) {
    console.log('Error connecting to Mongo DB', err.message);
  }
};

export default connectToMongoDB;
