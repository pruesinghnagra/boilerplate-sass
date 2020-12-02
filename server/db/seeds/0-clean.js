exports.seed = knex => {
  const empty = (table) => 
    () => knex(table).del()

  return empty('users')()
    // .then(empty('table_name')) remember the order that you need to delete the tables.
}
