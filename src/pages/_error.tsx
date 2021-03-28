import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Button from "@shared/Button";
import CenteredPage from "@shared/CenteredPage";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Obfuscate from "react-obfuscate";
import useTranslation from "next-translate/useTranslation";
import { Title } from "@shared/Typography";
import * as Sentry from "@sentry/node";
import { titleTemplate } from "@constants";

interface Props {
  statusCode: number | null;
}

library.add(faEnvelope);

const ErrorPage: NextPage<any> = ({
  statusCode,
  hasGetInitialPropsRun,
  err,
}: any) => {
  const { t } = useTranslation("common");

  if (!hasGetInitialPropsRun && err) {
    Sentry.captureException(err);
  }

  return (
    <CenteredPage fullWidth={false}>
      <NextSeo
        title={t("500.SEO.title")}
        titleTemplate={titleTemplate}
        noindex
      />
      <Title>
        {statusCode
          ? t("500.title.withCode", { statusCode })
          : t("500.title.default")}
      </Title>
      <p>{t("500.description")}</p>
      <Button beforeIcon={<FontAwesomeIcon icon={faEnvelope} />} showShadow>
        <Obfuscate email={t("contact.email")} />
      </Button>
    </CenteredPage>
  );
};

ErrorPage.getInitialProps = async ({ res, err, asPath }) => {
  let statusCode;

  if (res) {
    Sentry.captureException(res);
    statusCode = res.statusCode;
  } else if (err) {
    Sentry.captureException(err);

    statusCode = err.statusCode;
  }

  Sentry.captureException(
    new Error(`_error.js getInitialProps missing data at path: ${asPath}`)
  );

  await Sentry.flush(2000);

  return { statusCode };
};

export default ErrorPage;
