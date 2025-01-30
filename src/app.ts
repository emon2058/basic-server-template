import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorhandler';
import notFound from './app/middleware/notFound';
import router from './app/routes';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Students');
  console.log('welcome mair');
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
