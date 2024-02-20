import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // Parse JSON payloads request coming from (req.body)
app.use(cookieParser());
//middleware used to communicate with database using endpoint
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

// app.get('/', (req, res) => {
//   res.send('Hello');
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`${PORT} running!`);
});
