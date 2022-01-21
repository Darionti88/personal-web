/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["media-exp1.licdn.com", "s3.us-west-2.amazonaws.com"],
  },
  env: {
    NOTION_TESTIMONIAL_ID: process.env.NOTION_TESTIMONIAL_ID,
  },
};
