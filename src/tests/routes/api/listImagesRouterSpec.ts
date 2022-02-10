import request from 'supertest';
import app from '../../..';

describe('GET /api/listImages', () => {
  it('responds with 200 if there are images in the full folder', (): void => {
    request(app).get('/api/listImages').expect(200);
  });
  // it("responds with 500 if there are not images in the full folder", (): void => {
  //   request(app).get("/api/listImages").expect(500);
  // });
});
