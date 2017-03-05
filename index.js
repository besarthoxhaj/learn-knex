'use strict';

var knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'facebook'
  },
  migrations:{
    directory: './migrations'
  }
});

/**
 * Inserts a post into the database facebook
 * @type {String}
 */
knex('posts').insert({
  text: 'Hello, Foo!'
},'*').then(function(data) {
  console.log('data',data);
}).catch(function(error) {
  console.log('error',error);
});

/**
 * Read from the database.
 */
knex.select(
  'id',
  'text'
).from('posts').then(function(data) {
  console.log('Array.isArray(data)',Array.isArray(data));
  console.log('typeof data',typeof data);
  console.log('typeof data[0]',typeof data[0]);
  console.log('data',data);
}).catch(function(error) {
  console.log('error',error);
});


// knex.destroy();