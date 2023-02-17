import { Model } from 'mongoose';
import sinon from 'sinon';
import { expect } from 'chai';
import MotocycleService from '../../../src/Services/Motocycle.Service';

describe('Testes da camada service', function () {
  afterEach(function () {
    sinon.restore();
  });

  const motorcyclesService = new MotocycleService();
  it('/GET - Buscar todas as motos', async function () {
    const bicks = [{
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 1000f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    }];
    sinon.stub(Model, 'find').resolves(bicks);
    const result = await motorcyclesService.findAllMotorcycles();
    expect(result).to.be.deep.equal(bicks);
  });

  it('/GET - Buscar carros pelo id', async function () {
    const bick = {
      id: '6348513f34c397abcad040b3',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'findById').resolves(bick);

    const result = await motorcyclesService.findByIdMotorcycles('6348513f34c397abcad040b3');
    expect(result).to.be.deep.equal(bick);
  });

  it('Verifica se a classe "MotorcyclesService" existe', async function () {
    const result = expect(motorcyclesService).to.exist;
    return result;
  });
  
  it('Se o id for iválido deve lançar o erro "Invalid id"', async function () {
    sinon.stub(Model, 'findById').resolves(null);
    try {
      await motorcyclesService.findByIdMotorcycles('Invalid id');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    }
  });

  it('Criar motos com sucesso', async function () {
    const bickEnters = {
      model: 'Honda Cb 500f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const bickLeaves = {
      id: '6348513f34c397abcad040b5',
      model: 'Honda Cb 500f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    sinon.stub(Model, 'create').resolves(bickLeaves);

    const createdBick = await motorcyclesService.create(bickEnters);
    expect(createdBick).to.be.deep.equal(bickLeaves);
  });

  it('Tentar deletar uma moto que não existe vai aparecer a menssagem de erro', async function () {
    sinon.stub(Model, 'findByIdAndDelete').resolves(null);
    try {
      await motorcyclesService.delete('Invalid id');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });
});