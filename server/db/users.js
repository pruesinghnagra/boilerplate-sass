const connection = require('./connection')

module.exports = {
    getAllUsers
}

function getAllUsers(table, db = connection) {
    return db('users')
        .select()
        .where('users', table)
        .first()
}
