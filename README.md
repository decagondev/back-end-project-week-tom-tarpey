# BACK END PROJECT WEEK - (TOM TARPEY)

This is a REST CRUD API with endpoints to create, read, edit and update data in a database.

## USAGE

CRUD OPERATION ENDPOINTS

### CREATE

create a note
`PUSH -> /api/notes`

### READ

read a list of notes
`GET -> /api/notes`

read a single note by id
`GET -> /api/notes/:id`

### UPDATE

update a note by id
`PUT -> /api/notes/:id`

### DELETE

delete a note by id
`DELETE -> /api/notes/:id`

---

## DATABASE

The current database in use is a simple sqlite database but this API is extensible in that you can change the `./data/dbConfig.js` file to decide what type of database provider is used (see knex documentation for further information [insert link here])

---

## RUNNING API

To run the server locally you can fork and / clone it to your local machine. There are some prerequisites for this however:

- git
- nodejs
- npm
- yarn (optional but reccomended)

CLONE
`git clone git@github.com:decagondev/back-end-project-week-tom-tarpey.git`
this will clone the repository locally to your machine.

SETUP
`cd back-end-project-week-tom-tarpey`
`yarn`
this will move you in to the project directory then using yarn you will download and install the dependencies.

RUN
`yarn dev`
This will run the development server at `http://localhost:8800/` for usage see the endpoints.
