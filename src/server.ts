import express, { Express } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import './infra/database/typeorm';
import { router as usersRouter } from './routes/users';
import { router as tagsRouter } from './routes/tags';
import {
  exceptions as exceptionsMiddleware,
  ensureAdmin as ensureAdminMiddleware,
} from './middlewares';

const port: number = 3000;
const app: Express = express();

app.use(express.json());

/** Routes */
app.use(usersRouter, tagsRouter);

/** Global Middleware */
app.use(exceptionsMiddleware);

app.listen(3000, () => console.log(`Server is running on port ${port}`));
