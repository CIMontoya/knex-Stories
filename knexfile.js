module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/stories'
    },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
    }
  }
