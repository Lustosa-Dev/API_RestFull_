// ENV variables
require("dotenv").config();

import express from 'express';
import config  from 'config';
import router from './router'
import db from '../config/db';

import Logger from '../config/loggers'

import morganMiddleware from './middleware/morganMiddleware';

const app = express();

// JSON MIDDLEWARE
app.use(express.json());


// middleware
app.use(morganMiddleware)

// Routes
app.use("/api/", router)

// app port
const port = config.get<number>("PORT")

app.listen(port, async () => {
  await db();
  Logger.info(`Aplicação rodando na porta: ${port}`)
})