const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');

const authRoute = require("./routes/AuthRoute");

const { MONGO_URI, PORT } = process.env;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));


app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use(express.json());

app.use(bodyParser.json());

app.use("/", authRoute);

app.listen(PORT, ()=> {
    console.log(`Server lsitening on Port ${PORT}`)
})