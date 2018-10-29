const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRoutes = require("./api/mainRoutes");

// instantiate the express server
const server = express();

// use directives
server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

// use routes
server.use("/api", mainRoutes);

// listen on port 8800
server.listen(8000, () =>
  console.log("\n=== API listening on port 8000 ===\n")
);
