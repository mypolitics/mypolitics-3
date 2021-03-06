import React, { useMemo } from "react";
import InternationalizedInput from "@shared/InternationalizedInput";
import { UseEditor } from "@components/Editor/utils/useEditor";
import { TextTranslationInput } from "@generated/graphql";
import InputLabel from "@shared/InputLabel";
import useTranslation from "next-translate/useTranslation";
import { Container } from "./EditorBasicStyle";

interface Props {
  editor: UseEditor;
}

const EditorBasic: React.FC<Props> = ({ editor }) => {
  const { t } = useTranslation("editor");
  const { actions, basicInput } = editor;
  const { update } = actions;

  const handleTextChange = (
    value: string | TextTranslationInput,
    name: string
  ) =>
    update({
      quiz: {
        [name]: value,
      },
    });

  return (
    <Container>
      <InputLabel title={t("basic.input.title")}>
        <InternationalizedInput
          value={basicInput.title}
          onChange={(v) => handleTextChange(v, "title")}
        />
      </InputLabel>
      <InputLabel title={t("basic.input.description")}>
        <InternationalizedInput
          value={basicInput.description}
          onChange={(v) => handleTextChange(v, "description")}
        />
      </InputLabel>
    </Container>
  );
};

export default React.memo(EditorBasic);
