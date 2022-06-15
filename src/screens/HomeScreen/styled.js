import styled from "styled-components";

export const Main = styled.div`
  height: 980px;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr;
  }
`;
export const Titulo = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 400;
  display: flex;
  justify-content: space-around;
  color: white;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-left: 2vh;
  }
`;

export const ButtonInnitial = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40vh auto 0;
  width: 40vh;
  height: 6vh;
  border-radius: 50px;
  background: #47b872;
  box-shadow: inset 20px 20px 61px #3c9c61, inset -20px -20px 61px #52d483;
  background-color: #02bb36;
  font-size: larger;
  font-weight: bold;
  color: white;
`;
