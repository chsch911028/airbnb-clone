import 'dotenv/config';
import 'reflect-metadata';

/**
 * IOC Container, DI based on Decorator, ORM
 */
import { Container } from 'typedi';
import {
  useExpressServer,
  useContainer as routingUseContainer
} from 'routing-controllers';
import { createConnection, useContainer as ormUseContainer } from 'typeorm';

/**
 * Custom Setting Import
 */
import { CustomNamingStrategy } from './custom/CustomNamingStrategy';

/**
 * Load Apps(web, database etc)
 */
import app from './app';

routingUseContainer(Container);
ormUseContainer(Container);
createConnection({
  type: 'mysql',
  host: 'localhost',
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: true,
  entities: [__dirname + '/models/*.js'],
  synchronize: process.env.NODE_ENV === 'development' ? true : false,
  namingStrategy: new CustomNamingStrategy()
})
  .then()
  .catch(err => console.log(err));

const expressApp = useExpressServer(app, {
  routePrefix: 'api',
  controllers: [__dirname + '/controllers/**/*.js'],
  middlewares: [__dirname + '/middlewares/**/*.js']
  // interceptors: [__dirname + "/interceptors/**/*.js"]
});

expressApp.listen(3000, () => {
  console.log('=====Express Server Started=====');
  console.log('=====Process Env=====');
  console.dir(process.env.NODE_ENV);
});
