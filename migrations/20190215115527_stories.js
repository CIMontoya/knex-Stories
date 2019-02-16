exports.up = function(knex, Promise) {
  return knex.schema.createTable('stories', table => {
      table.increments('id').primary()
      table.string('title').notNull()
      table.string('story').notNull()
      table.integer('user_id').references('id').inTable('users')
    })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stories')
}
