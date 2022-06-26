var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
const mongoose = require("mongoose");
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const mongoURI = "mongodb://localhost:27017/MyApp";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

var Users = require("./routes/CustomerRoute");

var Gallery = require("./routes/GalleryRoute");
var Products = require('./routes/ProductRoute');

app.use("/customer", Users);

app.use("/gallery", Gallery);
app.use('/product', Products);


app.listen(port, function () {
  console.log("Server is running on port: " + port);
});
