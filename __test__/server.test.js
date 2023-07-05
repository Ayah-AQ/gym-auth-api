const request = require('supertest');
const { server } = require('../src/server');
const dataModules = require('../src/models');

jest.mock('../src/models', () => ({
  Model1: {
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },

  Model2: {
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
}));

describe('API model1 Routes', () => {
  beforeEach(() => {
    dataModules.Model1.get.mockReset();
    dataModules.Model1.create.mockReset();
    dataModules.Model1.update.mockReset();
    dataModules.Model1.delete.mockReset();
  });

  test('GET /v1/:model returns all records for the specified model', async () => {
    dataModules.Model1.get.mockResolvedValue([{ id: 1, name: 'Record 1' }, { id: 2, name: 'Record 2' }]);

    const response = await request(server).get('/v1/Model1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ id: 1, name: 'Record 1' }, { id: 2, name: 'Record 2' }]);
    expect(dataModules.Model1.get).toHaveBeenCalled();
  });
});

describe('model2  Routes', () => {
    beforeEach(() => {
      dataModules.Model2.get.mockReset();
      dataModules.Model2.create.mockReset();
      dataModules.Model2.update.mockReset();
      dataModules.Model2.delete.mockReset();
    });
  
    test('GET /v1/:model returns all records for the specified model', async () => {
      dataModules.Model2.get.mockResolvedValue([{ id: 1, name: 'Record 1' }, { id: 2, name: 'Record 2' }]);
  
      const response = await request(server).get('/v1/Model2');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([{ id: 1, name: 'Record 1' }, { id: 2, name: 'Record 2' }]);
      expect(dataModules.Model2.get).toHaveBeenCalled();
    });
  });
  