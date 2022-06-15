import React, { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";
import PilhaItem from "../../Components/Pilha/PilhaItem";
import {
  Button,
  CartaEscolhida,
  ContainerPilha,
  ContainerPrincipal,
  ButtonLinha,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { Titulo } from "../HomeScreen/styled";

const PilhaScreen = () => {
  const { states, setters, requests } = useContext(GlobalStateContext);
  const { getCards } = requests;
  const { setPilha1, setPilha2, setPilha3 } = setters;
  const { pilha1List, pilha2List, pilha3List } = states;
  const [numberTries, setNumberTries] = useState({ value: 0 });
  const [cardEscolhido, setCardEscolhido] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCards();
  }, []);

  const renderedPilha1 =
    cardEscolhido.length == 0 &&
    pilha1List &&
    pilha1List.map((card, index) => {
      return <PilhaItem key={index} card={card} />;
    });
  const renderedPilha2 =
    cardEscolhido.length == 0 &&
    pilha2List &&
    pilha2List.map((card, index) => {
      return <PilhaItem key={index} card={card} />;
    });
  const renderedPilha3 =
    cardEscolhido.length == 0 &&
    pilha3List &&
    pilha3List.map((card, index) => {
      return <PilhaItem key={index} card={card} />;
    });

  const renderedCardEscolhido =
    cardEscolhido &&
    cardEscolhido.map((card, index) => {
      return (
        <div>
          <PilhaItem key={index} card={card} />
        </div>
      );
    });

  function embaralharCartas(pilhaNumber) {
    numberTries.value = numberTries.value + 1;
    setNumberTries({ value: numberTries.value });

    let allCards = [];
    if (pilhaNumber === 1) {
      pilha2List.forEach((card) => {
        allCards.push(card);
      });

      pilha1List.forEach((card) => {
        allCards.push(card);
      });

      pilha3List.forEach((card) => {
        allCards.push(card);
      });
    }

    if (pilhaNumber === 2) {
      pilha1List.forEach((card) => {
        allCards.push(card);
      });

      pilha2List.forEach((card) => {
        allCards.push(card);
      });

      pilha3List.forEach((card) => {
        allCards.push(card);
      });
    }

    if (pilhaNumber === 3) {
      pilha1List.forEach((card) => {
        allCards.push(card);
      });

      pilha3List.forEach((card) => {
        allCards.push(card);
      });

      pilha2List.forEach((card) => {
        allCards.push(card);
      });
    }

    if (numberTries.value === 3) {
      let counter = 0;
      let card;
      allCards.forEach((carta) => {
        counter++;
        if (counter === 11) {
          card = carta;
        }
      });
      setCardEscolhido((cardEscolhido) => [card]);
    }

    let pilha1 = [];
    let pilha2 = [];
    let pilha3 = [];

    let counter;

    console.log(allCards);
    for (counter = 0; counter < allCards.length; counter++) {
      pilha1.push(allCards[counter]);
      counter++;
      pilha2.push(allCards[counter]);
      counter++;
      pilha3.push(allCards[counter]);
    }

    setPilha1((pilha1List) => pilha1);
    setPilha2((pilha2List) => pilha2);
    setPilha3((pilha3List) => pilha3);
  }

  return (
    <ContainerPrincipal>
      <Titulo>Magic Trick</Titulo>
      <Titulo>
        {numberTries.value === 0
          ?  "Memorize apenas uma carta e indique em qual pilha ela está:"
          : numberTries.value === 1
          ?  "E agora? em qual pilha a carta está?"
          : numberTries.value === 2
          ?  "E agora? pela última vez, em qual pilha está a carta?"
          :  "A carta que você pensou foi:"}
      </Titulo>

      <ContainerPilha>
        <ButtonLinha
          onClick={() => embaralharCartas(1)}
          hidden={numberTries.value === 3}
        >
          Pilha 1
        </ButtonLinha>
        {cardEscolhido ? renderedPilha1 : renderedCardEscolhido}
      </ContainerPilha>

      <ContainerPilha>
        <ButtonLinha
          onClick={() => embaralharCartas(2)}
          hidden={numberTries.value === 3}
        >
          Pilha 2
        </ButtonLinha>
        {cardEscolhido ? renderedPilha2 : renderedCardEscolhido}
      </ContainerPilha>

      <ContainerPilha>
        <ButtonLinha
          onClick={() => embaralharCartas(3)}
          hidden={numberTries.value === 3}
        >
          Pilha 3
        </ButtonLinha>
        {cardEscolhido ? renderedPilha3 : renderedCardEscolhido}
      </ContainerPilha>

      <CartaEscolhida>{renderedCardEscolhido}</CartaEscolhida>
      <Button
        hidden={cardEscolhido ? renderedPilha3 : renderedCardEscolhido}
        onClick={() => navigate("/")}
      >
        Jogar novamente
      </Button>
    </ContainerPrincipal>
  );
};

export default PilhaScreen;
