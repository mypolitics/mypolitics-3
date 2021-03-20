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
      <NextSeo title="Wystąpił błąd" titleTemplate="%s – myPolitics" />
      <Title>
        {statusCode ? `Wystąpił błąd ${statusCode}` : "Wystąpił nieznany błąd"}
      </Title>
      <p>Spróbuj odświeżyć stronę. Jeżeli to nie pomoże - daj nam znać!</p>
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
