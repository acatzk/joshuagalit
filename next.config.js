const withImages = require("next-images");

module.exports = withImages();
module.exports = {
  env: {
    HASURA_GRAPHQL_ADMIN_SECRET: process.env.HASURA_GRAPHQL_ADMIN_SECRET,
    ADMINISTRATOR_PASS: process.env.ADMINISTRATOR_PASS,
    GMAIL_SERVICE_ID: process.env.GMAIL_SERVICE_ID,
    GMAIL_TEMPLATE_ID: process.env.GMAIL_TEMPLATE_ID,
    GMAIL_USER_ID: process.env.GMAIL_USER_ID,
    MESSENGER_PAGE_ID: process.env.MESSENGER_PAGE_ID,
    MESSENGER_APP_ID: process.env.MESSENGER_APP_ID,
  },
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "jeromevillaruel.netlify.app",
      "benjamincarlson.io",
      "avatars.githubusercontent.com"
    ],
  },
   typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};