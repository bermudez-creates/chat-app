import mongoose from 'mongoose';

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('Connected to database!');
  } catch (err) {
    console.log('Error connecting to Mongo DB', err.message);
  }
};
//file used to communicate with database - We can add data to MongoDB in the cloud

export default connectToMongoDB;
