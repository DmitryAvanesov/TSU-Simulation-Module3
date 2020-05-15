import React from "react";
import styled from "styled-components";
import { DiceImage } from "./dice-image";
import { DiceButton } from "./dice-button";

const DivContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');  

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;

  & * {
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
  }

  & > * {
    margin: 0 auto 25px auto;
  }
`;

export const DiceContainer = () => {
  return (
    <DivContainer>
      <DiceImage />
      <DiceButton />
    </DivContainer>
  );
}