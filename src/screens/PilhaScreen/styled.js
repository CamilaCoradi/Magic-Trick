import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  flex-direction: column;
  display: flex;
  margin-top: 8vh;
`;
export const ButtonLinha = styled.button`
  color: white;
  font-weight: bold;
  height: 20px;
  position: center;
  margin-top: 50px;
  margin-right: 10px;
  border-radius: 50px;
  background: #161817;
  box-shadow: inset 20px 20px 61px #131414, inset -20px -20px 61px #191c1a;
  background-color: black;
`;
export const ContainerPilha = styled.div`
  display: flex;
  float: initial;
  margin: 0.9rem auto;
  width: auto;
  
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: grid;
    flex-direction: column;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4vh auto 0;
  width: 30vh;
  height: 8vh;
  border-radius: 30px;
  background: #47b872;
  box-shadow: inset 20px 20px 61px #3c9c61, inset -20px -20px 61px #52d483;
  font-size: larger;
  font-weight: bold;
  color: white;
`;
export const CartaEscolhida = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4vh auto 0;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4vh auto 0;
  }
`;
