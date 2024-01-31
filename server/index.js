/*-----
imports
-------*/

import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose";


/*-----------
configuration
-------------*/

// Loads .env file contents into process.env by default.
dotenv.config()

// Creates an Express application
const app = express();


/*---------
middlewares
-----------*/

// parse json and urlencoded in request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());


/*----
Routes
------*/

app.get("/", (req, res) => {
  res.send("connected");
});


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
