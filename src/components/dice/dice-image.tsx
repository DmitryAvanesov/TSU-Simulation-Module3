import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

interface IStyledProps {
  flipped: boolean
}

const Img = styled.img<IStyledProps>`
  display: block;
  transition: transform 0.5s;
  transform: ${props => (props.flipped ? 'rotate(720deg)' : 'rotate(0deg)')};
`;

interface IState {
  dice: {
    resultImage: string,
    flipped: boolean
  }
}

export const DiceImage = () => {
  const resultImage = useSelector((state: IState) => state.dice.resultImage);
  const flipped = useSelector((state: IState) => state.dice.flipped);

  return (
    <Img src={resultImage} flipped={flipped} />
  );
}