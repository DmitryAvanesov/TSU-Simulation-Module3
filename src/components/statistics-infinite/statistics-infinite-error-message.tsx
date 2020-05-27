import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Div = styled.div`
  color: red;

  && {
    font-size: 16px;
  }
`;

interface IState {
  statistics: {
    parameters: Array<number>
  }
}

export const StatisticsInfiniteErrorMessage = () => {
  const parametersAreUnique = useSelector((state: IState) => state.statistics.parameters.length == new Set(state.statistics.parameters).size);

  return (
    !parametersAreUnique ? <Div>Please make all the parameters unique</Div> : <Div>______________________________________</Div>
  );
}