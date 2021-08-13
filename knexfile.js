 // Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'blog',
      user:     '',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    }
  },
};
