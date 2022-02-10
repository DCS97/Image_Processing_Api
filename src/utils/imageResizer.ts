import fs from 'fs';
import sharp from 'sharp';

interface imageResizerProps {
  originalFile: string;
  height: number;
  width: number;
  outputFile: string;
}

const imageResizer = async ({
  originalFile,
  outputFile,
  width,
  height,
}: imageResizerProps): Promise<void> => {
  fs.mkdir('Images/thumb', { recursive: true }, (err) => {
    if (err) throw err;
  });
  await sharp(originalFile).resize(width, height).toFile(outputFile);
};

export default imageResizer;
