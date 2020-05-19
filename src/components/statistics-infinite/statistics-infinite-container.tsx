import React from "react";
import styled from "styled-components";
import { StatisticsAmount } from "../statistics/statistics-amount";
import { useSelector } from "react-redux";
import { StatisticsChart } from "../statistics/statistics-chart";
import { StatisticsDiscreteResult } from "../statistics-discrete/statistics-discrete-result";
import { StatisticsParameter } from "./statistics-infinite-parameter";
import { StatisticsInfiniteButton } from "./statistics-infinite-button";
import { StatisticsInfiniteErrorMessage } from "./statistics-infinite-error-message";

const Div = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

interface IState {
  statistics: {
    numberOfParameters: number
  }
}

export const StatisticsInfiniteContainer = () => {
  const numberOfParameters = useSelector((state: IState) => state.statistics.numberOfParameters);
  const statisticsParameters = new Array<JSX.Element>();

  for (let i = 0; i < numberOfParameters; i++) {
    statisticsParameters.push(<StatisticsParameter key={i} index={i} />);
  }

  return (
    <>
      <Div>
        {statisticsParameters}
        <StatisticsAmount />
        <StatisticsInfiniteButton />
        <StatisticsInfiniteErrorMessage />
      </Div>
      <Div>
        <StatisticsChart />
        <StatisticsDiscreteResult />
      </Div>
    </>
  );
}