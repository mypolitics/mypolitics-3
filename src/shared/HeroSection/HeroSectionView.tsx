import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Container, BackgroundImage, Inner, Overlay, Wrapper } from "./HeroSectionStyle";

interface Props {
  children: React.ReactNode;
}

const HeroView: React.FC<Props> = ({ children }) => {
  const { t } = useTranslation("home");

  return (
      <Container>
          <Wrapper>
          <Overlay/>
      <BackgroundImage
        src="/images/home-hero.png"
              alt={t("hero.altBackground")}
                  layout="fill"
              />
              </Wrapper>
      <Inner>{children}</Inner>
    </Container>
  );
};

export default HeroView;
