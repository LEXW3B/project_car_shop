import express from 'express';
import carsRoutes from './Routes/Routes';

const app = express();
app.use(express.json());
app.use('/cars', carsRoutes);
app.use('/motorcycles', carsRoutes);

export default app;
