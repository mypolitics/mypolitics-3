import React from "react";
import GoogleAd from "@shared/GoogleAd";
import {
  QuizLicense,
  QuizType,
  SingleQuizQuery,
  useCreateSurveyMutation,
} from "@generated/graphql";
import {
  faChartBar,
  faComment,
  faHistory,
  faLandmark,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";
import Button from "@shared/Button";
import { useQuizFeatures } from "@components/Quiz/utils/useQuizFeatures";
import Link from "next/link";
import { useHandleErrors } from "@utils/hooks/useHandleErrors";
import { useRouter } from "next/router";
import { paths } from "@constants";
import { LicenseLinks } from "@components/Quiz/SingleQuizPage/SingleQuizPageUtils";
import { PoliticiansResults, Vote } from "@components/Quiz";
import SurveysHistory from "@components/Survey/SurveysHistory";
import DisqusComments from "@shared/Comments";
import Box from "./SingleQuizPageBox";
import {
  ButtonWrapper,
  Chips,
  Container,
  Description,
  Feature,
  FeaturesList,
  Header,
  Inner,
  Logo,
  MetaWrapper,
  PoliticiansResultsWrapper,
  SurveysHistoryWrapper,
  Title,
  AuthorHeader,
} from "./SingleQuizPageStyle";
import { translate } from '@utils/translation';

interface Props {
  quiz: SingleQuizQuery["quiz"];
}

library.add(faStar, faChartBar, faLandmark, faHistory);

const QuizzesPage: React.FC<Props> = ({ quiz }) => {
  const { description, meta, currentVersion } = quiz;
  const { authors } = meta;
  const router = useRouter();
  const handleErrors = useHandleErrors();
  const [createSurvey, { loading }] = useCreateSurveyMutation();
  const quizFeatures = useQuizFeatures(meta.features);
  const { t, lang } = useTranslation("quiz");
  const isClassic = quiz.type === QuizType.Classic;
  const isCommunity = quiz.type === QuizType.Community;

  const handleStartClick = async () => {
    try {
      const { data } = await createSurvey({
        variables: {
          values: {
            quizVersion: currentVersion.id,
          },
        },
      });

      await router.push(paths.survey(data.createSurvey.id));
    } catch (e) {
      handleErrors(e);
    }
  };

  return (
    <>
      <GoogleAd id="myp3-standard-top" />
      <Container>
        <Header>
                  {quiz.logoUrl && <Logo src={quiz.logoUrl} alt={translate(quiz.title, lang)} width={161} height={32}/>}
          {!quiz.logoUrl && <Title>{translate(quiz.title, lang)}</Title>}
          {!isClassic && (
            <Button onClick={handleStartClick} loading={loading} showShadow>
              {t("link.begin")}
            </Button>
          )}
        </Header>
        {isCommunity && (
          <AuthorHeader>
            {t("single.social")}
            <span>{authors[0].name}</span>
          </AuthorHeader>
        )}
        <Inner>
          {isCommunity && (
            <Vote quizId={quiz.id} value={quiz.meta.votes.value} />
          )}
          <Box>
            <Description>{translate(description, lang)}</Description>
          </Box>
          <Box
            header={{
              title: t("single.functions"),
              icon: <FontAwesomeIcon icon={faStar} />,
            }}
          >
            <FeaturesList>
              {quizFeatures.map((feature) => (
                <Feature key={feature}>{feature}</Feature>
              ))}
            </FeaturesList>
          </Box>
          <Box
            header={{
              title: t("single.stats"),
              icon: <FontAwesomeIcon icon={faChartBar} />,
            }}
          >
            <div>
              <Chips>
                {meta.statistics.surveysNumber.toLocaleString()}&nbsp;
                <span>{t("single.tests")}</span>
              </Chips>
            </div>
          </Box>
          <Box
            header={{
              title: t("single.famous"),
              icon: <FontAwesomeIcon icon={faLandmark} />,
            }}
          >
            <PoliticiansResultsWrapper>
              <PoliticiansResults quizSlug={quiz.slug} onlyContent />
            </PoliticiansResultsWrapper>
          </Box>
          <Box
            header={{
              title: t("quizzes.history"),
              icon: <FontAwesomeIcon icon={faHistory} />,
            }}
          >
            <SurveysHistoryWrapper>
              <SurveysHistory quizSlug={quiz.slug} onlyContent />
            </SurveysHistoryWrapper>
          </Box>
          <Box>
            <MetaWrapper>
              {meta.authors.length > 0 && (
                <Chips>
                  <span>{t("single.author")}</span>&nbsp;
                  {meta.authors[0].name}
                </Chips>
              )}
              {meta.license !== QuizLicense.Commercial && (
                <Link href={LicenseLinks[meta.license]} passHref>
                  <Chips as="a" target="_blank">
                    <span>{t("single.license")}</span>&nbsp;
                    {meta.license}
                  </Chips>
                </Link>
              )}
            </MetaWrapper>
          </Box>
          {isCommunity && (
            <Box
              header={{
                title: t("single.comments"),
                icon: <FontAwesomeIcon icon={faComment} />,
              }}
            >
              <DisqusComments quiz={quiz} />
            </Box>
          )}
          {!isClassic && (
            <ButtonWrapper>
              <Button loading={loading} onClick={handleStartClick} showShadow>
                {t("link.begin")}
              </Button>
            </ButtonWrapper>
          )}
        </Inner>
      </Container>
      <GoogleAd id="myp3-standard-middle" />
    </>
  );
};

export default QuizzesPage;
