import express, { Express } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import '@infra/database/typeorm';
import dotenv from 'dotenv';
import path from 'path';
import { router as usersRouter } from '@routes/users';
import { router as tagsRouter } from '@routes/tags';
import { router as authRouter } from '@routes/auth';
import { router as complimentsRouter } from '@routes/compliments';
import {
  exceptions as exceptionsMiddleware,
  ensureAdmin as ensureAdminMiddleware,
} from '@middleware/index';

dotenv.config({
  path: path.join('..', '.env'),
});

const port: number = 3000;
const app: Express = express();

app.use(express.json());

/** Routes */
app.use(authRouter, usersRouter, tagsRouter, complimentsRouter);

/** Global Middleware */
app.use(exceptionsMiddleware);

app.listen(3000, () => console.log(`Server is running on port ${port}`));
