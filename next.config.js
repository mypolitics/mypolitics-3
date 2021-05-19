/* eslint @typescript-eslint/no-var-requires:0 */
const withTranslate = require("next-translate");

const nextConfig = {
  serverRuntimeConfig: {
    CONTENT_ADMIN_API_KEY: process.env.CONTENT_ADMIN_API_KEY,
  },
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    BASE_PATH: process.env.BASE_PATH,
  },
  reactStrictMode: true,
  future: {
    webpack5: true,
    strictPostcssConfiguration: true,
  },
  images: {
      domains: [
          'files.mypolitics.pl',
          'editor.mypolitics.pl'
      ],
  },
  async redirects() {
    return [
      {
        source: "/talks",
        destination: "https://youtube.com/myPolitics",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return process.env.NODE_ENV !== "production"
      ? [
          {
            source: "/api/:path*",
            destination: "https://mypolitics.pl/api/:path*",
          },
        ]
      : [];
    },
    typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = withTranslate(nextConfig);
