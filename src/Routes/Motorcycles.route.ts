import { Router } from 'express';
import MotocycleController from '../Controllers/Motocycle.Controller';

const router = Router();

router.post('/', (req, res, next) =>
  new MotocycleController(req, res, next).create());

router.get('/', (req, res, next) =>
  new MotocycleController(req, res, next).findAllCars());

export default router;
