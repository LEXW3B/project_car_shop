import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/Cars.Service';

const service = new CarService();

export default class IsValid {
  public async listAllCars(req: Request, res: Response, next: NextFunction) {
    const allCars = await service.findAllCars();

    if (!allCars) return res.status(404).json({ message: 'Car not found' });
    next();
  }

  public async ifCarExist(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const ifExist = await service.findById(id);
    if (!ifExist) return res.status(404).json({ message: 'Car not found' });
    next();
  }

  public async tokenLength(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    if (id.length !== 24) return res.status(422).json({ message: 'Invalid mongo id' });
    next();
  }
}