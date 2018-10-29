const db = require("../dbConfig");

module.exports = {
  // get method
  get: credentials => {
    return db("users")
      .where({ username: credentials.username })
      .first();
  },
  // insert method
  insert: user => {
    return db("users").insert(user);
  }
};
