exports.seed = (knex) => {
  return knex('users').insert([
    {id: 1, name: 'Prue', active: true},
    {id: 2, name: 'Magda', active: true},
    {id: 3, name: 'Alex', active: true},
  ])
}