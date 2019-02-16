exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table => {
      table.string('comment').notNull()
      table.integer('user_id').references('id').inTable('users')
      table.integer('story_id').references('id').inTable('stories')
    })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
}
