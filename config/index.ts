import { dbConfig } from './db';

const environment = process.env.NODE_ENV;
const PUBLIC_PEM = process.env.PUBLIC_PEM;
const PRIVATE_PEM = process.env.PRIVATE_PEM;

export { environment, dbConfig, PRIVATE_PEM, PUBLIC_PEM };
