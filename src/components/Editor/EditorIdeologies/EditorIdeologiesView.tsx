import React, { useMemo, useState } from "react";
import { UseEditor } from "@components/Editor/utils/useEditor";
import Button from "@shared/Button";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import IdeologyCreate from "@components/Editor/EditorIdeologies/IdeologyCreate";
import useTranslation from "next-translate/useTranslation";
import { ListContainer } from "./EditorIdeologiesStyle";
import IdeologyCard from "./IdeologyCard";

library.add(faPlus);

interface Props {
  editor: UseEditor;
}

const EditorIdeologies: React.FC<Props> = ({ editor }) => {
  const { t } = useTranslation("editor");
  const [showModal, setShowModal] = useState<boolean>(false);
  const { data } = editor;
  const ideologies = data.data.quiz.lastUpdatedVersion.ideologies || [];
  const ideologiesJson = JSON.stringify({ ideologies });
  const ideologiesList = useMemo(
    () =>
      ideologies.map((ideology) => (
        <IdeologyCard key={ideology.id} data={ideology} editor={editor} />
      )),
    [ideologiesJson]
  );

  return (
    <ListContainer>
      {ideologiesList}
      <Button
        background="bluish"
        beforeIcon={<FontAwesomeIcon icon={faPlus} />}
        onClick={() => setShowModal(true)}
      >
        {t("ideologies.create")}
      </Button>
      <IdeologyCreate
        show={showModal}
        onClose={() => setShowModal(false)}
        editor={editor}
      />
    </ListContainer>
  );
};

export default EditorIdeologies;
