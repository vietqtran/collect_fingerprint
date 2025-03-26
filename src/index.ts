import express, { Request, Response } from 'express';

import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT ?? 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Call to server is successful'
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;