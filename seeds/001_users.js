exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: "Cesar Montoya", username: "CIMontoya", email: "cimontoya31@gmail.com"},
        {id: 2, name: "Larry Johnson", username: "Larson", email: "larryjohnson15@gmail.com"},
        {id: 3, name: "Blake Smith", username: "Balake", email: "bsmith111@gmail.com"}
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))"
      )
    })
}
