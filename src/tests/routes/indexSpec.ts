import supertest from 'supertest';
import app from '../..';

const request = supertest(app);
describe('Server Router', () => {
  it('returns a 200 if chooseImage route exists', () => {
    request.get('/chooseImage').expect(200);
  });
  it('returns a 200 if listImages route exists', () => {
    request.get('/listImages').expect(200);
  });
});
