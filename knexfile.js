// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'facebook'
    },
    migrations:{
      directory:'./migrations'
    }
  }
};
