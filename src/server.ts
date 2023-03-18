import 'reflect-metadata';
import dotenv from 'dotenv';
import App from './app';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
// eslint-disable-next-line
const app = new App();
// console.log(process.env.NODE_ENV);
// console.log(process.env.PORT);
