/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  env: {
    USERS_API_URL: 'https://647cc089c0bae2880ad1233e.mockapi.io/api/blog/users',
    BLOG_API_URL: 'https://647cc089c0bae2880ad1233e.mockapi.io/api/blog/blog/',
  },
};

module.exports = nextConfig;
