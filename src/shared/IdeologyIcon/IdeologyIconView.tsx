import React from "react";
import { IdeologyIcon as IdeologyIconType } from "@generated/graphql";
import * as R from "ramda";
import Image from 'next/image';

interface Props {
  icon: IdeologyIconType;
}

const IdeologyIcon: React.FC<Props> = ({ icon }) => {
  const { type, value } = icon;

  return R.cond([
    [R.equals("font-awesome"), R.always(<span className={`fa ${value}`} />)],
      [R.T, R.always(<Image src={value} alt={value} width={24} height={24}/>)],
  ])(type);
};

export default IdeologyIcon;
