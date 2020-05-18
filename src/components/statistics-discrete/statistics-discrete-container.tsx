import React from "react";
import styled from "styled-components";
import { StatisticsProbability } from "../statistics/statistics-probability";
import { StatisticsAmount } from "../statistics/statistics-amount";
import { StatisticsDiscreteButton } from "./statistics-discrete-button";
import { useSelector } from "react-redux";
import { StatisticsChart } from "../statistics/statistics-chart";
import { StatisticsErrorMessage } from "../statistics/statistics-error-message";
import { StatisticsDiscreteResult } from "./statistics-discrete-result";

const Div = styled.div`
  display: inline-block;
`;

interface IState {
  statistics: {
    numberOfProbabilities: number
  }
}

export const StatisticsDiscreteContainer = () => {
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
        <StatisticsDiscreteButton />
        <StatisticsErrorMessage />
      </Div>
      <Div>
        <StatisticsChart />
        <StatisticsDiscreteResult />
      </Div>
    </>
  );
}