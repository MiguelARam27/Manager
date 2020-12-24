import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/config.js';
import morgan from 'morgan';
import userRoutes from './routes/userRoutes.js';
import managerRoutes from './routes/managerRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();
const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/manager', managerRoutes);
app.get('/', (req, res) => {
  res.send('API is running....');
});

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
