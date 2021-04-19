const withImages = require('next-images')

module.exports = withImages()
module.exports = {
  env: {
    HASURA_GRAPHQL_ADMIN_SECRET: process.env.HASURA_GRAPHQL_ADMIN_SECRET,
    ADMINISTRATOR_PASS: process.env.ADMINISTRATOR_PASS
  }
}