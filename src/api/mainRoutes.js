const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const session = require("express-session");

const notes = require("../../data/models/notesModel");
const users = require("../../data/models/usersModel");

// get notes
router.get("/notes", async (req, res) => {
  try {
    // get all notes
    const allNotes = await notes.get().orderBy("id", "desc");

    // setup the order string
    const noteOrderString = await users.getNoteOrder(1);

    // parse the json and extract the noteOrderArray
    const noteOrderArray = JSON.parse(noteOrderString.noteOrder);
    // check there is a note order array
    if (noteOrderArray.length === 0) {
      return res.status(200).json(allNotes);
    } else {
      // set an orderedNotes by mapping over the array and ordering via a find
      const orderedNotes = noteOrderArray.map(order => {
        return allNotes.find(note => note.id === order);
      });
      // return the ordered notes to the caller
      return res.status(200).json(orderedNotes);
    }
  } catch (error) {
    // cath any error left and send it to the caller
    return res.status(500).json({
      message: "the notes could not be retrieved",
      error: error.message
    });
  }
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
