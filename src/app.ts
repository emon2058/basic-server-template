import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRouter } from './app/modules/students/students.route';
import { UserRouter } from './app/modules/user/user.route';
import globalErrorHandler from './app/middleware/globalErrorhandler';
import notFound from './app/middleware/notFound';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.use('/api/v1/students', StudentRouter);
app.use('/api/v1/users', UserRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Students');
  console.log('welcome mair');
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
