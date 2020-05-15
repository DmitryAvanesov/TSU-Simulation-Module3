import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Img = styled.img`
  display: block;
`;

interface IState {
  dice: {
    resultImage: string
  }
}

export const DiceImage = () => {
  const resultImage = useSelector((state: IState) => state.dice.resultImage);

  return (
    <Img src={resultImage} />
  );
}