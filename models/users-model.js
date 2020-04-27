module.exports = {
    find,
    findBy,
    findById,
    add,
    update,
    remove
  }

const db = require("../database/dbConfig");



function find() {
  return db("users");
};

function findBy(filter) {
  return db("users")
    .select("id", "username", "password")
    .where(filter);
}

function findById(id) {
  return db("users")
    .select("id", "username")
    .where({ id })
    .first();
}

function add(newUser) {
  return db("users")
    .insert(newUser, "id")
    .then(id => {
      return findById(id[0]); 
    });
};

function update(id, changes) {
  return db("users")
    .where({ id })
    .update(changes);
};

function remove(id) {
  return db("users")
    .where("id", id)
    .del();
};