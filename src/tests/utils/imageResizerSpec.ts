import {
  FOLDER_PATH_THUMB_IMAGE,
  FOLDER_PATH_FULL_IMAGE,
} from '../../constants';
import imageResizer from '../../utils/imageResizer';

const fileName = 'fjord';
const height = 100;
const width = 100;
const originalFile = `${FOLDER_PATH_THUMB_IMAGE}/${fileName}_${height}_${width}.jpg`;
const outputFile = `${FOLDER_PATH_FULL_IMAGE}/${fileName}.jpg`;

it('resizes a image', () => {
  expect(() => {
    imageResizer({ originalFile, height, width, outputFile });
  }).not.toThrow();
});
