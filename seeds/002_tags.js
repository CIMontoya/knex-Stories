exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        {id: 1, tag: "comedy"},
        {id: 2, tag: "horror"},
        {id: 3, tag: "romance"},
        {id: 4, tag: "drama"},
        {id: 5, tag: "non-fiction"},
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('tags_id_seq', (SELECT MAX(id) FROM tags))"
      )
    })
}
