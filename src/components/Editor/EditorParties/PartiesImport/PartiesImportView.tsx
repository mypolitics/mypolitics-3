import React from "react";
import Button from "@shared/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useEditorStandardPartiesQuery } from "@generated/graphql";
import { UseEditor } from "@components/Editor/utils/useEditor";
import * as R from "ramda";
import useTranslation from "next-translate/useTranslation";
import {Container} from "./PartiesImportStyle";
import Image from 'next/image';

library.add(faPlus);

interface Props {
  editor: UseEditor;
}

const IdeologiesImport: React.FC<Props> = ({ editor }) => {
  const { t } = useTranslation("editor");
  const { data } = useEditorStandardPartiesQuery({
    fetchPolicy: "no-cache",
  });
  const { actions } = editor;
  const parties = data?.quiz.currentVersion.parties || [];
  const byCountry = R.groupBy(R.prop("country"));
  const countryParties = byCountry(parties);

  return (
    <Container>
      <span>{t("parties.import")}</span>
      {Object.keys(countryParties).map((country) => (
        <Button
          key={country}
          background="bluish"
          beforeIcon={<FontAwesomeIcon icon={faPlus} />}
          onClick={() => actions.parties.import(countryParties[country])}
        >
          <Image
            src={`/images/countries/${country}.png`}
                  alt={country}
                  width={32}
                  height={20}
          />
        </Button>
      ))}
    </Container>
  );
};

export default React.memo(IdeologiesImport, () => true);
