import express, { Application, Request, Response } from 'express';
import routes from './routes';

const app: Application = express();

const port = process.env.PORT || 3000;

app.listen(port, (): void => {
  console.log(`server running on port:${port}`);
});

app.get('/', (req: Request, res: Response): void => {
  res.status(200).send('Server is working!');
});

app.use('/api', routes);

export default app;
