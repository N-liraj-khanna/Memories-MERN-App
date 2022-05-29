// Imports
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

import postRoutes from "./routes/posts.js";

// Constants
const PORT = process.env.PORT || 5000;
const app = express();


// Middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
console.log(process.env.MONGO_URL);


// Routings
app.use("/posts", postRoutes)


// Config
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server up and running at ${PORT}`);
    })
  )
  .catch((err) => console.log(err));
