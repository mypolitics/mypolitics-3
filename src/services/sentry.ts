import * as Sentry from "@sentry/node";

export const init = () => {
  Sentry.init({
    enabled: process.env.NODE_ENV === "production",
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    release: process.env.NEXT_PUBLIC_COMMIT_SHA,
  });
};
