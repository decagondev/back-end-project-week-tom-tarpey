const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const session = require("express-session");

const notes = require("../../data/models/notesModel");
const users = require("../../data/models/usersModel");

// checkNote middleware
const checkNote = (req, res, next) => {
  if (!req.body.title || !req.body.content) {
    return res.status(400).json({ message: "All fields must be completed." });
  }
  next();
};

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
  try {
    // get the note at the id provided in the params
    const note = await notes.get(req.params.id);
    // test that it returns a note at that id and if not return a 404
    if (!note) {
      return res
        .status(404)
        .json({ message: `the note does not exist at id of ${req.params.id}` });
    }
    // otherwise return the 200 success
    return res.status(200).json(note);
  } catch (error) {
    // catch any other error and return a 500
    return res.status(500).json({
      message: "the note could not be retrieved",
      error: error.message
    });
  }
});

// post notes (create a new note)
router.post("/notes", checkNote, async (req, res) => {
  try {
    // create a new note based on the caller body
    const newNote = await notes.insert(req.body);
    // set an order string from the users table
    const noteOrderString = await users.getNoteOrder(1);

    // using json parse the order string array in to an array
    const noteOrderArray = JSON.parse(noteOrderString.noteOrder);

    // unshift the newNote.id from the order array
    noteOrderArray.unshift(newNote.id);

    // the updated note order from the note order array using json stringify
    const updatedNoteOrder = { noteOrder: JSON.stringify(noteOrderArray) };

    // update the note order in the users table
    await users.updateNoteOrder(1, updatedNoteOrder);

    // respond with a 201 on success
    return res.status(201).json(newNote);
  } catch (error) {
    // catch any error and return a 500
    return res.status(500).json({
      message: "the note could not be added",
      error: error.message
    });
  }
});

// put note at id (edit note)
router.put("/notes/:id", checkNote, async (req, res) => {
  // TODO: add logic
});

// delete note at id
router.delete("/notes/:id", async (req, res) => {
  // TODO: add logic
});

module.exports = router;
