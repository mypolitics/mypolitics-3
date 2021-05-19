import React from "react";
import * as R from "ramda";
import DefaultLink from "next/link";
import { Section } from "@components/Home";
import Button from "@shared/Button";
import { BasicTalkPartsFragment } from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";
import { paths } from "@constants";
import dynamic from "next/dynamic";
import { AdditionalContentWrapper } from "./HomeTalkSectionStyle";

interface Props {
  talks: BasicTalkPartsFragment[];
}

const Link = dynamic(() => import("@components/Talk/TalkLink"));

const HomeTalkSection: React.FC<Props> = ({ talks }) => {
  const { t } = useTranslation("home");

  const toTalkLink = (talk: BasicTalkPartsFragment) => (
    <Link key={talk.id} data={talk} />
  );
  const talksLinks = R.map(toTalkLink, talks);

  return (
    <Section
      title={t("talk.title")}
      slogan={t("talk.slogan")}
      variant="right"
      illustrationUrl="/images/debate.png"
      content={
        <>
          <p>{t("talk.content.text")}</p>
          <div>
            <DefaultLink href={paths.talks} passHref>
              <Button as="a" showShadow>
                {t("talk.content.buttonText")}
              </Button>
            </DefaultLink>
          </div>
        </>
      }
      additionalContent={
        <AdditionalContentWrapper>{talksLinks}</AdditionalContentWrapper>
      }
    />
  );
};

export default HomeTalkSection;
