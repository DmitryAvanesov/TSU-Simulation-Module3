import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Div = styled.div`
  color: red;
  font-size: 16px !important;
`;

interface IState {
  statistics: {
    probabilities: Array<number>
  }
}

export const StatsCharacteristicsErrorMessage = () => {
  const probabilitiesSum = useSelector((state: IState) => state.statistics.probabilities.reduce((a, b) => a + b));

  return (
    probabilitiesSum != 100 ? <Div>Your probabilities&apos; sum equals to {probabilitiesSum.toFixed(2)}%. Please make it 100%.</Div> : <Div>_______________________________________________________________</Div>
  );
}