exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stories').del()
    .then(function () {
      // Inserts seed entries
      return knex('stories').insert([
        {id: 1, title: "Caller Unknown", story: "\"Hello?\" Silence... Emma hears heavy breathing before the line is cut short.", user_id: 2},
        {id: 2, title: "Speach Impediment", story: "My 6 year old has a speach impediment where he replaces the letter \"s\" with the letter \"f\". One day in traffic I said \"Get out of the way suckers!\" and I got called by my child's school because he decided to use the phrase too.", user_id: 1},
        {id: 3, title: "The Rise and Fall of the Roman Empire", story: "It all started when 300 guys named Roman met and created their own society. It ended when they fought over their last names.", user_id: 3}
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('stories_id_seq', (SELECT MAX(id) FROM stories))"
      )
    })
}
