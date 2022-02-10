import supertest from 'supertest';
import app from '../';

const request = supertest(app);
describe('Server EntryPoints', () => {
  it('returns a 200 if entrypoint exists', () => {
    request.get('/').expect(200);
  });
  it('it returns a 404 if no route is selected', () => {
    request.get('/api').expect(404);
  });
});
