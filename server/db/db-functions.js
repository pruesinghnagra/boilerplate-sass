const connection = require('./connection')

module.exports = {
  getAll
}

function getAll (table, db = connection) {
  return db('table')
    .select()
    .where('table', table)
    .first()
}
