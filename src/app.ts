import * as express from 'express';
import * as cors from 'cors';
import { config } from 'dotenv';
import { ConnectionOptions, createConnection } from 'typeorm';
import { UserRoutes } from './Routes/UserRoutes';
const localConfig = config({ path: './.env' });
const rootDir = __dirname;

const typeORMSettings = {
    name: 'default',
    synchronize: true,
    type: 'postgres',
    url: process.env.DATABASE_URL || localConfig.parsed.DATABASE_URL,
    ssl: process.env.DATABASE_URL ? true : false, // If env var is not set then it is dev
    entities: [`${rootDir}/**/*.entity.js`, `${rootDir}/**/*.entity.{ts,js}`],
    migrations: [`${rootDir}/migrations/**/*.js`],
    subscribers: [`${rootDir}/subscriber/*.js}`],
};

const router = express.Router();

createConnection(typeORMSettings as ConnectionOptions).then((db) => {
    const app = express();
    app.use(
        cors({
            origin: [
                'http://localhost:3000',
                'http://localhost:8080',
                'http://localhost:4200',
            ],
        })
    );

    app.use('/api', router);
    UserRoutes(router);

    console.log('Listening to http://localhost:8080');
    app.listen(8080);
});
