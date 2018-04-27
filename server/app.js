const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

app.use(logger("common"));
app.use(cors());

app.set("port", process.env.PORT || "3000");

const routes = require("./routes");

app.use(routes);

module.exports = app;
