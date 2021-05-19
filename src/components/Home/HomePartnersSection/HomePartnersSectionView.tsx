import React from "react";
import * as R from "ramda";
import { HomePageQuery } from "@generated/graphql";
import { Lead, Title } from "@shared/Typography";
import useTranslation from "next-translate/useTranslation";
import {
  Container,
  Image,
  Overlay,
  Inner,
  Header,
  PartnerImage,
  PartnerLink,
  Content,
  ContentTitle,
  ContentList,
  Wrapper
} from "./HomePartnersSectionStyle";

interface Props {
  partners: HomePageQuery["partner"]["partners"];
}

const HomePartnersSection: React.FC<Props> = ({ partners }) => {
  const { t } = useTranslation("home");
  const toPartnerLink = (partner: HomePageQuery["partner"]["partners"][0]) => (
    <PartnerLink
      key={partner.url}
      href={partner.url}
      target="_blank"
      rel="noreferrer"
    >
      <PartnerImage
        src={partner.image.formats.thumbnail.url}
        alt={partner.name}
        width={64}
        height={64}
      />
    </PartnerLink>
  );

  const partnersLinks = R.map(toPartnerLink, partners);

  return (
      <Container>
          <Wrapper>
                  <Overlay/>
          <Image
            src="/images/home-hero.png"
            alt=""
              layout="fill"
              priority
            />
          </Wrapper>
      <Inner>
        <Header>
          <Title>{t("partners.title")}</Title>
          <Lead>{t("partners.lead")}</Lead>
        </Header>
        <Content>
          <ContentTitle>{t("partners.content.title")}</ContentTitle>
          <ContentList>{partnersLinks}</ContentList>
        </Content>
      </Inner>
    </Container>
  );
};

export default HomePartnersSection;
