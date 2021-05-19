import React, { useState } from "react";
import { EditorPartyPartsFragment } from "@generated/graphql";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import ActionButton from "@shared/ActionButton";
import { UseEditor } from "@components/Editor/utils/useEditor";
import { Container, Name, Image } from "./PartyCardStyle";
import PartyEdit from "../PartyEdit";

library.add(faPen, faTimes);

interface Props {
  data: EditorPartyPartsFragment;
  showActions?: boolean;
  editor?: UseEditor;
}

const PartyCard: React.FC<Props> = ({ data, editor, showActions = true }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { name, logoUrl, viewerCanEdit } = data;

  return (
    <Container>
          <Image src={logoUrl} alt={name} width={24} height={24}/>
      <Name>{name}</Name>
      {showActions && editor && (
        <>
          {viewerCanEdit && (
            <ActionButton variant="bluish" onClick={() => setShowModal(true)}>
              <FontAwesomeIcon icon={faPen} />
            </ActionButton>
          )}
          <ActionButton
            onClick={() => editor.actions.parties.delete(data.id)}
            variant="red"
            mustConfirm
          >
            <FontAwesomeIcon icon={faTimes} />
          </ActionButton>
          <PartyEdit
            show={showModal}
            onClose={() => setShowModal(false)}
            data={data}
            editor={editor}
          />
        </>
      )}
    </Container>
  );
};

export default PartyCard;
