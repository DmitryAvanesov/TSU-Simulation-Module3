import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeStatisticsProbability, clickStatisticsButton } from "../../redux/actions";

interface IState {
  statistics: {
    probabilities: Array<number>
  }
}

export const StatisticsButton = () => {
  const probabilitiesSum = useSelector((state: IState) => state.statistics.probabilities.reduce((a, b) => a + b));
  const dispatch = useDispatch();

  return (
    <button
      disabled={probabilitiesSum == 100 ? false : true}
      onClick={() => {dispatch(clickStatisticsButton())}}
    >
      Simulate
    </button>
  );
}