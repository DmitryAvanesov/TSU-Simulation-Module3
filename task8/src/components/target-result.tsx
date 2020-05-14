import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Div = styled.div`
  text-align: center;
`;

interface IState {
  target: {
    points: number
  }
}

export const TargetResult = () => {
  const points = useSelector((state: IState) => state.target.points);

  return (
    points ? <Div>You got {points} points</Div> : <Div>Come on, try your luck!</Div>
  );
}