import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Img = styled.img`
  display: block;

  &.rotation-appear {
    opacity: 0.01;
  }
  
  &.rotation-appear.rotation-appear-active {
    opacity: 1;
    transition: opacity .5s ease-in;
  }
`;

interface IState {
  dice: {
    resultImage: string
  }
}

export const DiceImage = () => {
  const resultImage = useSelector((state: IState) => state.dice.resultImage);

  return (
    <CSSTransition
      key={'rotation'}
      timeout={500}
      classNames="item"
    >
      <Img src={resultImage} />
    </CSSTransition>
  );
}