import express, { Express } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import './infra/database/typeorm';

import { Middleware } from './routes/middeware';
import { router as usersRouter } from './routes/users';
import { router as tagsRouter } from './routes/tags';

const port: number = 3000;
const app: Express = express();

app.use(express.json());

/** ----------- Routes and Middleware ----------- */
app.use(usersRouter);
app.use(tagsRouter);
app.use(Middleware.handler);
/** --------------------------------------------- */

app.listen(3000, () => console.log(`Server is running on port ${port}`));
