import { Router } from 'express';
import MotocycleController from '../Controllers/Motocycle.Controller';
import IsValid from '../middleware/validatingMotocycle';

const valid = new IsValid();

const router = Router();

router.post('/', (req, res, next) =>
  new MotocycleController(req, res, next).create());

router.get('/', valid.listAllMotorcycles, (req, res, next) =>
  new MotocycleController(req, res, next).findAllMotorcycles());

router.get('/:id', valid.tokenLength, valid.ifMotorcyclesExist, (req, res, next) =>
  new MotocycleController(req, res, next).findByIdMotorcycles());

export default router;
