import { Router } from 'express';
import MotocycleController from '../Controllers/Motocycle.Controller';

const router = Router();

router.post('/', (req, res, next) =>
  new MotocycleController(req, res, next).create());

export default router;
