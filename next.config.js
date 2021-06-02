/* eslint @typescript-eslint/no-var-requires:0 */
const { withSentryConfig } = require("@sentry/nextjs");
const withTranslate = require("next-translate");
const withImages = require("next-optimized-images");

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      include: /\.(js|ts)x?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
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
};

module.exports = withSentryConfig(
  withTranslate(
    withImages({
      ...nextConfig,
      responsive: {
        adapter: require("responsive-loader/sharp"),
      },
    })
  )
);
