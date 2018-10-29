const db = require("../dbConfig");

module.exports = {
  get: id => {
    let query = db("notes");

    if (id) {
      return query.where("id", id).first();
    }

    return query;
  },

  insert: note => {
    return db("notes")
      .insert(note)
      .then(([id]) => module.exports.get(id));
  }
};
