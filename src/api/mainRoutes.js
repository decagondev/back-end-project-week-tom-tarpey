const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const session = require("express-session");

const notes = require("../../data/models/notesModel");
const users = require("../../data/models/usersModel");

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
