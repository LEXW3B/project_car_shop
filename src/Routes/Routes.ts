import { Router } from 'express';
import CarsController from '../Controllers/Cars.Controller';
import IsValid from '../middleware/validating';

const valid = new IsValid();
const router = Router();

router.post('/', (req, res, next) => new CarsController(req, res, next).create());

router.get('/', valid.listAllCars, (req, res, next) =>
  new CarsController(req, res, next).findAllCars());

router.get('/:id', valid.tokenLength, valid.ifCarExist, (req, res, next) =>
  new CarsController(req, res, next).findById());

router.put('/:id', valid.tokenLength, valid.ifCarExist, (req, res, next) =>
  new CarsController(req, res, next).update());

export default router;
