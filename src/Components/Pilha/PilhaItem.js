import React from "react";
import { ContainerCard, Main } from "./styled";

const PilhaItem = (props) => {
  return (
    <Main>
      <ContainerCard alt={props.card.code} src={props.card.image} />
    </Main>
  );
};

export default PilhaItem;
