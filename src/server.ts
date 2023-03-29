import dotenv from 'dotenv';
import App from './app';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
// eslint-disable-next-line
const app = new App();
