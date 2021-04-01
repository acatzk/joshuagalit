const withImages = require('next-images')
module.exports = {
  env: {
    HASURA_GRAPHQL_ADMIN_SECRET: process.env.HASURA_GRAPHQL_ADMIN_SECRET,
  }
}, withImages()