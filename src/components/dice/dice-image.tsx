import React from "react";
import styled from "styled-components";
import image from '../../resources/dice/dice-1.svg';

const Img = styled.img`
  display: block;
`;

export const DiceImage = () => {
  return (
    <Img src={image} />
  );
}