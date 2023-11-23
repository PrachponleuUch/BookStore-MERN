import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/bookRoute.js";
import cors from "cors";

const app = express();

//Middleware for parsing request body
app.use(express.json());
app.use(
  cors({
    // origin: '',
    // methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // allowedHeaders: ['Content-Type']
  })
);

//Check to see if the port is working
app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});

//Check to see if base route is working
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("SUCCESSFUL");
});

//For route with '/books', use routes from booksRoute
app.use("/books", booksRoute);

//Check if DB connection is working
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
  });
