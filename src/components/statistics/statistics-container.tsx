import React from "react";
import styled from "styled-components";
import { StatisticsProbability } from "./statistics-probability";
import { StatisticsAmount } from "./statistics-amount";
import { StatisticsButton } from "./statistics-button";
import { useSelector } from "react-redux";
import { StatisticsChart } from "./statistics-chart";
import { StatisticsErrorMessage } from "./statistics-error-message";

const Div = styled.div`
  display: inline-block;
`;

interface IState {
  statistics: {
    numberOfProbabilities: number
  }
}

export const StatisticsContainer = () => {
  const numberOfProbabilities = useSelector((state: IState) => state.statistics.numberOfProbabilities);
  const statisticsProbabilities = new Array<JSX.Element>();

  for (let i = 0; i < numberOfProbabilities; i++) {
    statisticsProbabilities.push(<StatisticsProbability key={i} index={i} />);
  }

  return (
    <>
      <Div>
        {statisticsProbabilities}
        <StatisticsAmount />
        <StatisticsButton />
        <StatisticsErrorMessage />
      </Div>
      <Div>
        <StatisticsChart />
      </Div>
    </>
  );
}