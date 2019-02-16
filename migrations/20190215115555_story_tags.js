exports.up = function(knex, Promise) {
  return knex.schema.createTable('story_tags', table => {
    table.integer('story_id').references('id').inTable('stories')
    table.integer('tag_id').references('id').inTable('tags')
    })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('story_tags')
}
