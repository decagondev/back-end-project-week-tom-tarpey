const db = require("../dbConfig");

module.exports = {
  get: credentials => {
    return db("users")
      .where({ username: credentials.username })
      .first();
  }
};
