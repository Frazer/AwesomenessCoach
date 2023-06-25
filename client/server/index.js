const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose"),
  config = require("./config"),
  bodyParser = require("body-parser");

let app = express();
let port = process.env.PORT || 4000;

// Connect to mongo
mongoose.connect(config.mongo_connection,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
);
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

// Allow CORS so that backend and frontend could be put on different servers
let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
};
app.use(allowCrossDomain);
app.use(bodyParser.json());

// Routes setup
require("./routes")(app, router);

// Start the server
app.listen(port, () => console.log("Server running on port " + port));
