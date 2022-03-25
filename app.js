const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require("cors");

const app = express();
app.use(cors());

const visitor = require("./Routes/routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./config/db_config").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/", visitor);

var port = process.env.PORT || 3003;
app.listen(port);
console.log("App is running on port " + port);
