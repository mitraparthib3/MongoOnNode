const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
app.use(bodyParser.json());
app.use(morgan("common"));

const mongoConnString = `${process.env.MONGO_protocol}${process.env.MONGO_user}:${process.env.MONGO_password}@${process.env.MONGO_URL}/${process.env.MONGO_dbname}?${process.env.MONGO_flags}`;

// console.log(mongoConnString);
mongoose.connect(mongoConnString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error(error);
});

db.once("open", () => {
  console.log("Connected to mongo db");
});

const usersRoute = require("./routes/users.js");

app.use("/api/users", usersRoute);
app.use("/", (req, res) => {
  res.send("<h1>Hello there, you are on the index page.</h1>");
});

const _PORT = process.env.PORT || 8080;
app.listen(_PORT, () => {
  console.log(`Server is running on ${_PORT}`);
});
