const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRoutes = require("./api/mainRoutes");

const server = express();
