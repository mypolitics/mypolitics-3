import React from "react";
import {
  QuizType,
  ResultsPartsFragment,
  ResultsPoliticianPartsFragment,
} from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { paths } from "@constants";
import { translate } from "@utils/translation";
import Button from "@shared/Button";
import {
  Info,
  Header,
  Logo,
  Date as HeaderDate,
  Id,
  PoliticianSubHeader,
  Title,
  AuthorHeader,
  Row,
} from "./ResultsHeaderStyle";

interface Props {
  results: ResultsPartsFragment;
  politician?: ResultsPoliticianPartsFragment;
}

const ResultsHeader: React.FC<Props> = ({ results, politician }) => {
  const { t, lang } = useTranslation("results");
  const { quiz, updatedAt, id } = results;
  const path = paths.quiz(quiz.slug);

  return (
    <div>
      <Header>
        <Row>
          {quiz.logoUrl && (
            <Logo src={quiz.logoUrl} alt={translate(quiz.title, lang)} />
          )}
          {!quiz.logoUrl && <Title>{translate(quiz.title, lang)}</Title>}
          <Link href={path}>
            <Button>{t("header.try")}</Button>
          </Link>
        </Row>
        <Info>
          <HeaderDate>
            <span>{t("header.finished")}</span>&nbsp;
            {new Date(updatedAt).toLocaleString(undefined, {
              hour12: false,
              day: "numeric",
              month: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </HeaderDate>
          <Id>
            <span>{t("header.id")}</span>
            {id}
          </Id>
        </Info>
      </Header>
      {politician && (
        <PoliticianSubHeader>{politician.name}</PoliticianSubHeader>
      )}
      {quiz.type === QuizType.Community && (
        <AuthorHeader>{t("header.social")}</AuthorHeader>
      )}
    </div>
  );
};

export default ResultsHeader;
