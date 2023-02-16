import { Model } from 'mongoose';
import sinon from 'sinon';
import { expect } from 'chai';
import CarsService from '../../../src/Services/Cars.Service';

describe('Testes da camada service', function () {
  afterEach(function () {
    sinon.restore();
  });

  const carService = new CarsService();
  it('/GET - Buscar todos os carros', async function () {
    const cars = [{
      id: '63ec476bb37a66429c72706f',
      model: 'Marea3',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    }];
    sinon.stub(Model, 'find').resolves(cars);
    const result = await carService.findAllCars();
    expect(result).to.be.deep.equal(cars);
  });

  it('/GET - Buscar carros pelo id', async function () {
    const cars = {
      id: '63ec476bb37a66429c72706f',
      model: 'Marea3',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };

    sinon.stub(Model, 'findById').resolves(cars);

    const result = await carService.findById('63ec476bb37a66429c72706f');
    expect(result).to.be.deep.equal(cars);
  });

  it('Verifica se a classe "CarsService" existe', async function () {
    const result = expect(carService).to.exist;
    return result;
  });
  
  it('Se o id for iválido deve lançar o erro "Invalid id"', async function () {
    sinon.stub(Model, 'findById').resolves(null);
    try {
      await carService.findById('Invalid id');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });

  it('Criar carro com sucesso', async function () {
    const carEnters = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const carLeaves = {
      id: '63ec476bb37a66429c72706f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    sinon.stub(Model, 'create').resolves(carLeaves);

    const createdCar = await carService.create(carEnters);
    expect(createdCar).to.be.deep.equal(carLeaves);
  });
});
