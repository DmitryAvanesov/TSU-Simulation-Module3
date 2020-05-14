import React from "react";
import { YesOrNoQuestion } from "./yes-or-no-question"
import { YesOrNoButton } from "./yes-or-no-button";
import { YesOrNoResult } from "./yes-or-no-result";
import styled from "styled-components";

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

export const YesOrNoContainer = () => {
  return (
    <DivContainer>
      <YesOrNoQuestion />
      <YesOrNoButton />
      <YesOrNoResult />
    </DivContainer>
  );
}