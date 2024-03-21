const path = require("path");
const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors"); // to resolve CORS (Cross-Origin Resource Sharing) Issues // CORS enhances security by preventing unintended cross-origin requests. Without CORS, browsers restrict cross-origin requests by default.
const corsOptions = require("./config/corsOption");

const PORT = process.env.PORT || 3500;

app.use(cors(corsOptions)); // we put this line as soon as possible but after *app.use(logger);*
// by using this now I can run "fetch('http://localhost:3500');" from dev tools in more websites than before the introduction of this line

app.get("/", async (req, res) => {
  window.location = "www.google.com"
});

// app.use(function (err, req, res, next) {
//     console.error(err.stack);
//     res.status(500).send(err.message);
// })

// Export the Express API
module.exports = app;
