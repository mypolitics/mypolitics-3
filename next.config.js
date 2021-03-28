/* eslint @typescript-eslint/no-var-requires:0 */
const nextTranslate = require("next-translate");
const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const SentryWebpackPlugin = require("@sentry/webpack-plugin");

const {
  NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
  SENTRY_ORG,
  SENTRY_PROJECT,
  SENTRY_AUTH_TOKEN,
  NODE_ENV,
  VERCEL_GIT_COMMIT_SHA,
} = process.env;

process.env.SENTRY_DSN = SENTRY_DSN;
const basePath = "";

const nextConfig = {
  webpack(config, options) {
    if (!options.isServer) {
      config.resolve.alias["@sentry/node"] = "@sentry/browser";
    }

    config.plugins.push(
      new options.webpack.DefinePlugin({
        "process.env.NEXT_IS_SERVER": JSON.stringify(
          options.isServer.toString()
        ),
      })
    );

    if (
      SENTRY_DSN &&
      SENTRY_ORG &&
      SENTRY_PROJECT &&
      SENTRY_AUTH_TOKEN &&
      VERCEL_GIT_COMMIT_SHA &&
      NODE_ENV === "production"
    ) {
      config.plugins.push(
        new SentryWebpackPlugin({
          include: ".next",
          ignore: ["node_modules"],
          stripPrefix: ["webpack://_N_E/"],
          urlPrefix: `~${basePath}/_next`,
        })
      );
    }

    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
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
            destination: "http://localhost:5000/:path*",
          },
        ]
      : [];
  },
  productionBrowserSourceMaps: true,
  env: {
    NEXT_PUBLIC_COMMIT_SHA: GITHUB_SHA,
  },
  basePath,
};

module.exports = withPlugins(
  [
    nextTranslate,
    [
      optimizedImages,
      {
        responsive: {
          adapter: require("responsive-loader/sharp"),
        },
      },
    ],
  ],
  nextConfig
);
