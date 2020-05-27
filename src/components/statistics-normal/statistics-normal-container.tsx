import React from "react";
import styled from "styled-components";
import { StatisticsAmount } from "../statistics/statistics-amount";
import { useSelector } from "react-redux";
import { StatisticsChart } from "../statistics/statistics-chart";
import { StatisticsDiscreteResult } from "../statistics-discrete/statistics-discrete-result";
import { StatisticsNormalChart } from "./statistics-normal-chart";
import { StatisticsNormalAverage } from "./statistics-normal-average";
import { StatisticsNormalVariance } from "./statistics-normal-variance";
import { StatisticsNormalButton } from "./statistics-normal-button";

const Div = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

interface IState {
  statistics: {
    numberOfNormalCharts: number
  }
}

export const StatisticsNormalContainer = () => {
  const numberOfNormalCharts = useSelector((state: IState) => state.statistics.numberOfNormalCharts);
  const charts = new Array<JSX.Element>();

  for (let i = 0; i < numberOfNormalCharts; i++) {
    charts.push(<StatisticsNormalChart key={i} index={i} />);
  }

  return (
    <>
      <Div>
        <StatisticsNormalAverage />
        <StatisticsNormalVariance />
        <StatisticsAmount />
        <StatisticsNormalButton />
      </Div>
      <Div>
        {charts}
      </Div>
    </>
  );
}