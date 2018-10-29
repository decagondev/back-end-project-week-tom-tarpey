const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const session = require("express-session");

const notes =
  // get notes
  router.get("/notes", async (req, res) => {
    // TODO: add logic
  });

router.get("/notes/:id", async (req, res) => {
  // TODO: add logic
});
