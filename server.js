const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const apiroutes = require("./routes/api.js");
const htmlroutes = require("./routes/html.js");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
apiroutes(app);
htmlroutes(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.post("/submit", ({ body }, res) => {
  user
    .create(body)
    .then((dbexample) => {
      res.json(dbexample);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}!`);
});
