const withImages = require("next-images");

module.exports = withImages();
module.exports = {
  reactStrictMode: true,
  env: {
    MESSENGER_PAGE_ID: process.env.MESSENGER_PAGE_ID,
    MESSENGER_APP_ID: process.env.MESSENGER_APP_ID,
    NEXT_PUBLIC_NHOST_BACKEND: process.env.NEXT_PUBLIC_NHOST_BACKEND
  },
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "jeromevillaruel.netlify.app",
      "benjamincarlson.io",
      "avatars.githubusercontent.com",
      "instagram.fdvo1-1.fna.fbcdn.net",
      "joshuagalit-com.vercel.app"
    ],
  }
};