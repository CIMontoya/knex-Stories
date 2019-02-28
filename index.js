const port = process.env.PORT || 3000
const express = require("express")
const app = express()

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const knex = require('knex')(config)

const dotenv = require('dotenv').config()




app.get('/', (req, res, nex) => {
  knex('users')
  .then(users => {
      let newAr = users.map(user => {
        return knex('stories')
        .join('users', 'users.id', 'stories.user_id')
        .select('stories.title', 'stories.story', 'stories.user_id', 'stories.id AS story_id', 'users.username')
        .where('stories.user_id', user.id)
        .then(stories => {
          user.stories = stories
          return user
        })
      })
      return Promise.all(newAr)
      .then(users => {
        let newArr = users.map(user => {
           let newArrr = user.stories.map(story => {
            return knex('comments')
            .select('comments.comment', 'users.username')
            .join('users', 'users.id', 'comments.user_id')
            .where('comments.story_id', story.story_id)
            .then(comments => {
              story.comments = comments
              return story
            })
          })
          return Promise.all(newArrr).then(() => user)
        })
        return Promise.all(newArr)
      })
    })
  .then((rows) => {
    res.send(rows)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.listen(port, () => console.log(`Visit ${port}`))
