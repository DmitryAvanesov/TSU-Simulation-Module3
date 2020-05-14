import React from "react";
import styled from "styled-components";
import { TargetImage } from "./target-image";
import { TargetButton } from "./target-button";
import { TargetResult } from "./target-result";

const DivContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');  

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  & * {
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
  }

  & > * {
    margin: 0 auto 25px auto;
  }
`;

export const TargetContainer = () => {
  return (
    <DivContainer>
      <TargetImage />
      <TargetButton />
      <TargetResult />
    </DivContainer>
  );
}