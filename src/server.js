const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRoutes = require("./api/mainRoutes");

// instantiate the express server
const server = express();

// use directives
server.use(express.json());
