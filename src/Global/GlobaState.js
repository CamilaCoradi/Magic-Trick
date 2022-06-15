import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const GlobalState = (props) => {
  const [pilha1List, setPilha1] = useState(undefined);
  const [pilha2List, setPilha2] = useState(undefined);
  const [pilha3List, setPilha3] = useState(undefined);

  const getCards = () => {
    //Get Baralho
    axios
      .get(`${BASE_URL}/deck/new/shuffle/?deck_count=1`)
      .then((responseDeck) => {
        //Get Cards
        axios
          .get(`${BASE_URL}/deck/${responseDeck.data.deck_id}/draw/?count=21`)
          .then((responseCards) => {
            let cards = responseCards.data.cards;

            //Pilha1
            let pilha1 = [
              cards[0],
              cards[1],
              cards[2],
              cards[3],
              cards[4],
              cards[5],
              cards[6],
            ];
            setPilha1(pilha1);
            console.log("Pilha1 => " + pilha1);
            //Pilha2
            let pilha2 = [
              cards[7],
              cards[8],
              cards[9],
              cards[10],
              cards[11],
              cards[12],
              cards[13],
            ];
            setPilha2(pilha2);
            console.log("Pilha2 => " + pilha2);

            //Pilha3
            let pilha3 = [
              cards[14],
              cards[15],
              cards[16],
              cards[17],
              cards[18],
              cards[19],
              cards[20],
            ];
            setPilha3(pilha3);
            console.log("Pilha3 => " + pilha3);

            console.log(responseCards.data.cards);
          })
          .catch((err) => alert(err.response.message));
      })
      .catch((err) => alert(err.response.message));
  };

  const states = { pilha1List, pilha2List, pilha3List };
  const setters = { setPilha1, setPilha2, setPilha3 };
  const requests = { getCards };

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
