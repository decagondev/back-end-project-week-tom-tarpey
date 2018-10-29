const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const session = require("express-session");

const notes = null; // TODO: add linkup of helpers
const users = null; // TODO: add linkup of helpers

// get notes
router.get("/notes", async (req, res) => {
  // TODO: add logic
});

// get note at id
router.get("/notes/:id", async (req, res) => {
  // TODO: add logic
});

// post notes (create a new note)
router.post("/notes", noteCheck, async (req, res) => {
  // TODO: add logic
});

// put note at id (edit note)
router.put("/notes/:id", noteCheck, async (req, res) => {
  // TODO: add logic
});

// delete note at id
router.delete("/notes/:id", async (req, res) => {
  // TODO: add logic
});
