import React from "react";
import styled from "styled-components";
import { StatsCharacteristicsProbability } from "./stats-characteristics-probability";
import { StatsCharacteristicsAmount } from "./stats-characteristics-amount";
import { StatsCharacteristicsButton } from "./stats-characteristics-button";
import { useSelector } from "react-redux";
import { StatsCharacteristicsChart } from "./stats-characteristics-chart";
import { StatsCharacteristicsErrorMessage } from "./stats-characteristics-error-message";

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

export const StatsCharacteristicsContainer = () => {
  const numberOfProbabilities = useSelector((state: IState) => state.statistics.numberOfProbabilities);
  const statisticsProbabilities = new Array<JSX.Element>();

  for (let i = 0; i < numberOfProbabilities; i++) {
    statisticsProbabilities.push(<StatsCharacteristicsProbability key={i} index={i} />);
  }

  return (
    <DivContainer>
      <Div>
        {statisticsProbabilities}
        <StatsCharacteristicsAmount />
        <StatsCharacteristicsButton />
        <StatsCharacteristicsErrorMessage />
      </Div>
      <Div>
        <StatsCharacteristicsChart />
      </Div>
    </DivContainer>
  );
}