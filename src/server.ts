import express from 'express';
import 'reflect-metadata';
import './infra/database/typeorm';
import { router } from './routes';

const port: number = 3000;
const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => console.log(`Server is running on port ${port}`));
