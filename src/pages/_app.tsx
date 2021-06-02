import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@services/apollo";
import { Toaster, toast, useToasterStore } from "react-hot-toast";
import Layout from "@layout";
import Router from "next/router";
import NProgress from "nprogress";
import "modern-normalize/modern-normalize.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FacebookProvider } from "react-facebook";
import useTranslation from "next-translate/useTranslation";

config.autoAddCss = false;

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { lang } = useTranslation();
  const apolloClient = useApollo(pageProps.initialApolloState);
  const facebookLanguage = `${lang}_${lang.toUpperCase()}`;
  const { toasts } = useToasterStore();

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= 1)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  return (
    <FacebookProvider appId="4144384798967211" language={facebookLanguage}>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Toaster />
      </ApolloProvider>
    </FacebookProvider>
  );
};

export default App;
