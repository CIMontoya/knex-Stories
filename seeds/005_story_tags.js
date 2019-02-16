exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('story_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('story_tags').insert([
        {story_id: 1, tag_id: 2},
        {story_id: 2, tag_id: 1},
        {story_id: 3, tag_id: 5}
      ])
    })
}
