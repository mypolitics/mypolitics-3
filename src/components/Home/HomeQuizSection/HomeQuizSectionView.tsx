import React from "react";
import { Section } from "@components/Home";
import Button from "@shared/Button";
import useTranslation from "next-translate/useTranslation";
import DefaultLink from "next/dist/client/link";
import { paths } from "@constants";
import * as R from "ramda";
import { AdditionalContentImage, ImageBox } from "./HomeQuizSectionStyle";

const plImg = "/images/mypolitics-quiz-results-pl.png";
const intImg = "/images/mypolitics-quiz-results.png";

const HomeQuizSection: React.FC = () => {
  const { t, lang } = useTranslation("home");

  const contentSrc = R.cond([
    [R.equals("pl"), R.always(plImg)],
    [R.T, R.always(intImg)],
  ])(lang);

  return (
    <Section
      title={t("quiz.title")}
      slogan={t("quiz.slogan")}
      variant="right"
      illustrationUrl="/images/quiz.png"
          additionalContent={
          <ImageBox>
                  <AdditionalContentImage src={contentSrc} width={900} height={746} alt="" />
                  </ImageBox>
      }
      content={
        <>
          <p>{t("quiz.content.text")}</p>
          <div>
            <DefaultLink href={paths.quizzes} passHref>
              <Button as="a" showShadow>
                {t("quiz.content.buttonText")}
              </Button>
            </DefaultLink>
          </div>
        </>
      }
    />
  );
};

export default HomeQuizSection;
