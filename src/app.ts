import express from 'express';
import carsRoutes from './Routes/Routes';
import motorcyclesRoutes from './Routes/Motorcycles.route';

const app = express();
app.use(express.json());
app.use('/cars', carsRoutes);
app.use('/motorcycles', motorcyclesRoutes);

export default app;
