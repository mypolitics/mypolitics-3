import React from "react";
import Button from "@shared/Button";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import HeroSection from "@shared/HeroSection";
import Link from "next/link";
import { paths } from "@constants";
import {
  Title,
  Content,
  Illustration,
  SubTitle,
  ButtonsWrapper,
    Wrapper,
  IllustrationWrapper
} from "./HomeHeroStyle";

const HeroView: React.FC = () => {
  const { t } = useTranslation("home");

  const handleCta = () =>
    typeof window !== "undefined" &&
    window.scrollTo({
      top: window.innerHeight / 2,
      behavior: "smooth",
    });

  return (
    <Wrapper>
      <HeroSection>
        <Content>
          <Trans
            i18nKey="home:hero.title"
            components={[<Title key="0" />, <span key="1" />]}
          />
          <SubTitle>{t("hero.subTitle")}</SubTitle>
          <ButtonsWrapper>
            <Link href={paths.quizzesPreInitialize} passHref>
              <Button as="a" showShadow pulsating>
                {t("hero.quizLink")}
              </Button>
            </Link>
            <Button onClick={handleCta} background="black">
              {t("hero.learnMore")}
            </Button>
          </ButtonsWrapper>
              </Content>
              <IllustrationWrapper>
        <Illustration
          src="/images/candidate.png"
                  alt={t("hero.candidate")}
                  width={740}
                  height={480}
                  />
                  </IllustrationWrapper>
      </HeroSection>
    </Wrapper>
  );
};

export default HeroView;
