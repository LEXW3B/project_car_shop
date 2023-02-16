import { NextFunction, Request, Response } from 'express';
import MotorcyclesService from '../Services/Motocycle.Service';

const service = new MotorcyclesService();

export default class IsValid {
  public async listAllMotorcycles(req: Request, res: Response, next: NextFunction) {
    const allCars = await service.findAllMotorcycles();

    if (!allCars) return res.status(404).json({ message: 'Motorcycle not found' });
    next();
  }

  public async ifMotorcyclesExist(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const ifExist = await service.findByIdMotorcycles(id);
    if (!ifExist) return res.status(404).json({ message: 'Motorcycle not found' });
    next();
  }

  public async tokenLength(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    if (id.length !== 24) return res.status(422).json({ message: 'Invalid mongo id' });
    next();
  }
}