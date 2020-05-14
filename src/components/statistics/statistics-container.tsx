import React from "react";
import styled from "styled-components";
import { StatisticsProbability } from "./statistics-probability";
import { StatisticsAmount } from "./statistics-amount";
import { StatisticsButton } from "./statistics-button";
import { useSelector } from "react-redux";
import { StatisticsChart } from "./statistics-chart";
import { StatisticsErrorMessage } from "./statistics-error-message";

const DivContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');  

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;

  & * {
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
  }

  & > div > * {
    margin: 0 auto 25px auto;
  }
`;

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
    <DivContainer>
      <Div>
        {statisticsProbabilities}
        <StatisticsAmount />
        <StatisticsButton />
        <StatisticsErrorMessage />
      </Div>
      <StatisticsChart />
    </DivContainer>
  );
}