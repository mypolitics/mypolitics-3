import React, { useEffect, useState } from "react";
import Button from "@shared/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useEditorQuizIdeologiesLazyQuery } from "@generated/graphql";
import Loading from "@shared/Loading";
import { useHandleErrors } from "@utils/hooks/useHandleErrors";
import { UseEditor } from "@components/Editor/utils/useEditor";
import Modal from "@shared/Modal";
import { useTheme } from "styled-components";
import InputLabel from "@shared/InputLabel";
import { Input } from "@shared/Common";
import { parseUrl } from "@components/Editor/EditorIdeologies/IdeologiesImport/IdeologiesImportUtils";
import useTranslation from "next-translate/useTranslation";
import {Container} from "./IdeologiesImportStyle";
import Image from 'next/image'

library.add(faPlus);

interface Props {
  editor: UseEditor;
}

const IdeologiesImport: React.FC<Props> = ({ editor }) => {
  const { t } = useTranslation("editor");
  const { actions } = editor;
  const [getIdeologies, { loading }] = useEditorQuizIdeologiesLazyQuery({
    onCompleted: (data) =>
      actions.ideologies.import(data.quiz.currentVersion.ideologies),
  });
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState("");
  const handleErrors = useHandleErrors();
  const theme = useTheme();

  const handleImport = async (slug: string) => {
    try {
      await getIdeologies({
        variables: {
          slug,
        },
      });

      setShowModal(false);
    } catch (e) {
      handleErrors(e);
    }
  };

  return (
    <>
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        header={{
          title: t("ideologies.importModal.title"),
          color: theme.colors.primaryDarken,
        }}
      >
        <InputLabel title={t("ideologies.importModal.url")}>
          <Input
            value={url}
            onChange={({ target: { value } }) => setUrl(value)}
            placeholder="https://mypolitics.pl/quizzes/mypolitics"
          />
          {parseUrl(url).length > 0 && (
            <Button
              background="bluish"
              beforeIcon={<FontAwesomeIcon icon={faPlus} />}
              onClick={() => handleImport(parseUrl(url))}
              loading={loading}
              disabled={loading}
            >
              {t("ideologies.importModal.button")}
            </Button>
          )}
        </InputLabel>
      </Modal>
      <Container>
        <span>{t("ideologies.import")}</span>
        {loading && <Loading />}
        {!loading && (
          <>
            <Button
              background="bluish"
              beforeIcon={<FontAwesomeIcon icon={faPlus} />}
              onClick={() => handleImport("mypolitics")}
            >
              <Image
                src="https://files.mypolitics.pl/mypolitics2/cdnv2-myplogo_e3e80327aa.png"
                              alt="mypolitics"
                                      width={322}
        height={64}
              />
            </Button>
            <Button
              background="bluish"
              beforeIcon={<FontAwesomeIcon icon={faPlus} />}
              onClick={() => setShowModal(true)}
            >
              {t("ideologies.importFromOther")}
            </Button>
          </>
        )}
      </Container>
    </>
  );
};

export default IdeologiesImport;
