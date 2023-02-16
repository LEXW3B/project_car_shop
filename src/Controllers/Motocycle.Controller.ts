import { NextFunction, Request, Response } from 'express';
import MotorcyclesService from '../Services/Motocycle.Service';

export default class MotocycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private motorcyclesService: MotorcyclesService;
  private INVALID!: 'Invalid id';
  private NOT_FOUND!: 'Car not found';

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.motorcyclesService = new MotorcyclesService();
  }

  public async create() {
    try {
      const { body } = this.req;
      const newMotorcycles = await this.motorcyclesService
        .create({ ...body, status: body.status || false });
      return this.res.status(201).json(newMotorcycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAllMotorcycles() {
    try {
      const motorcycles = await this.motorcyclesService.findAllMotorcycles();
      return this.res.status(200).json(motorcycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async findByIdMotorcycles() {
    try {
      const { id } = this.req.params;
      const IdMotorcycles = await this.motorcyclesService.findByIdMotorcycles(id);
      return this.res.status(200).json(IdMotorcycles);
    } catch (error) {
      return this.res.status(404).json({ message: this.INVALID });
    }
  }

  public async update() {
    try {
      const { id } = this.req.params;

      const obj = {
        model: this.req.body.model,
        year: this.req.body.year,
        color: this.req.body.color,
        status: this.req.body.status,
        buyValue: this.req.body.buyValue,
        category: this.req.body.category,
        engineCapacity: this.req.body.engineCapacity,
      };

      const updating = await this.motorcyclesService.update(id, obj);

      return this.res.status(200).json(updating);
    } catch (error) {
      return this.res.status(404).json({ message: this.NOT_FOUND });
    }
  }

  public async delete() {
    try {
      const { id } = this.req.params;
      await this.motorcyclesService.delete(id);
      return this.res.status(202);
    } catch (error) {
      return this.res.status(422).json({ message: this.INVALID });
    }
  }
}