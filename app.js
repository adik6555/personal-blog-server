//Imports
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//Set up dotenv config
require("dotenv/config");

//Set up express server
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

//Set up routes from router
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to db");
  }
);

//Start the server
app.listen(3000, "localhost", () => {
  console.log("running");
});
