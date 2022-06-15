import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonInnitial, Main, Titulo } from "./styled";

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <Main>
      <Titulo>Magic Trick</Titulo>
        <ButtonInnitial  onClick={() => navigate("/pilha")}>
          START
        </ButtonInnitial>
    </Main>
  );
};

export default HomeScreen;
