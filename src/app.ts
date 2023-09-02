import { Express } from 'express'
import * as bodyParser from "body-parser";
import * as express from "express";
import { UserRouter } from './apps/crud/routes';

const addMiddleware: (app: Express) => Express = app => {
  app.use(bodyParser.json());

  app.use('/user', UserRouter)

  app.use('/', (req, res) => {
    res.send({ msg: 'Hello, World', version: '0.1' })
  })

  return app
}

const startApp: () => Express = () => {
  const app = express();
  addMiddleware(app)
  return app
}

export const app: Express = startApp()