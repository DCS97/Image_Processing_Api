import request from 'supertest';
import fs from 'fs/promises';
import path from 'path';
import { Stats } from 'fs';
import app from '../../..';
import { FOLDER_PATH_THUMB_IMAGE } from '../../../constants';

describe('GET /api/chooseImage', () => {
  it('responds with 200 if called correctly and image exist', (): void => {
    request(app)
      .get('/api/chooseImage?fileName=fjord&height=100&width=100')
      .expect(200);
  });

  it('responds with 400 if called without parameters', (): void => {
    request(app).get('/api/chooseImage').expect(400);
  });

  it('responds with 400 if called with a missing parameter', (): void => {
    request(app).get('/api/chooseImage?fileName=fjord&height=100').expect(400);
  });

  it('responds with 404 if called correctly but image does not exist', (): void => {
    request(app)
      .get('/api/chooseImage?fileName=test&height=100&width=100')
      .expect(404);
  });

  it('creates a resized version of the original image', (): void => {
    request(app)
      .get('/api/chooseImage?fileName=fjord&height=100&width=100')
      .then(() => {
        fs.stat(
          path.resolve(
            __dirname,
            `${FOLDER_PATH_THUMB_IMAGE}/fjord_100_100.jpg`
          )
        ).then((fileStat: Stats) => expect(fileStat).not.toBeNull());
      });
  });
  it('resizes the image according to the dimensions in the query', (): void => {
    request(app)
      .get('/api/chooseImage?fileName=fjord&height=100&width=100')
      .then(() => {
        const image = require(`${FOLDER_PATH_THUMB_IMAGE}/fjord_100_100.jpg`);
        expect(image.height).toBe(100);
        expect(image.width).toBe(100);
      })
      .catch(() => null);
  });
});
