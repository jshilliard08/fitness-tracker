const mongoose = require("mongoose");
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//bring in mongoose.connect
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// //Declare routes
// const api = require('./routes/api');
app.use(require("./routes/api.js"))

// const html = require('./routes/html');
app.use(require("./routes/html.js"))


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });