exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {comment: "Took me a while", user_id: 2, story_id: 2},
        {comment: "Edit: My kid was confused as to why he was in the office getting scolded. I explained the situation and made sure he doesn't use that phrase.", user_id: 1, story_id: 2},
        {comment: "Oh man. Kids are so funny!", user_id: 3, story_id: 2},
      ])
    })
}
