/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "media-exp1.licdn.com",
      "s3.us-west-2.amazonaws.com",
      "scontent.faep26-1.fna.fbcdn.net",
    ],
  },
  env: {
    NOTION_TESTIMONIAL_ID: process.env.NOTION_TESTIMONIAL_ID,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(svg|pdf)$/,
      type: "asset/resource",
    });

    return config;
  },
};
