/*-----
imports
-------*/

import express from "express";
import path from "path"
import { fileURLToPath } from "url"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import mongoose from "mongoose";
import helmet from "helmet";

import { requestLogger } from "./middlewares/requestLogger.js";
import { errorHandler } from "./middlewares/errorHandler.js";

import authRouter from "./routers/authRouter.js"

/*------------
configurations
--------------*/

// Creates an Express application
const app = express();

// Load .env file contents into process.env 
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
// note: __dirname related to server.js
export const __dirname = path.dirname(__filename)


/*---------
middlewares
-----------*/

// requests logger
app.use(requestLogger)

// set security HTTP headers
app.use(helmet());

// parse json and urlencoded in request body, and cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

// enable cors
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

/*------------
Route Handlers
--------------*/

app.use('/auth', authRouter)

// custom 404
app.use('*', (req, res) => {
  res.status(404).send('Sorry, page not found')
})

// errors handler
app.use(errorHandler)


/*--------------------
Listen for connections
----------------------*/

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(conn => {
    console.log(`connected to ${conn.connection.name} db.`)
    app.listen(port, () => console.log(`Server listening on port ${port}.`));
  })
  .catch(err => console.log(err))
