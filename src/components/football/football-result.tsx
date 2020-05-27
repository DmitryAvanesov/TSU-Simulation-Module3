import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Div = styled.div`
  && {
    font-size: 28px;
  }
`;

interface IState {
  football: {
    scoreFirst: number,
    scoreSecond: number
  }
}

export const FootballResult = () => {
  const scoreFirst = useSelector((state: IState) => state.football.scoreFirst);
  const scoreSecond = useSelector((state: IState) => state.football.scoreSecond);

  return (
    <Div>{scoreFirst}  :  {scoreSecond}</Div>
  );
}