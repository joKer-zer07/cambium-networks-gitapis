const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const routes = require("./routes");

//DB connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//routes
app.use("/", routes);

//port
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("App is running on port " + port);
});
