import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clickStatisticsButton, clickStatisticsDiscreteButton, clickStatisticsInfiniteButton } from "../../redux/actions";
import { IAction } from "../../redux/action-types";

interface IState {
  statistics: {
    parameters: Array<number>
  }
}

export const StatisticsInfiniteButton = () => {
  const parametersAreUnique = useSelector((state: IState) => state.statistics.parameters.length == new Set(state.statistics.parameters).size);
  const dispatch = useDispatch();

  return (
    <button
      disabled={parametersAreUnique ? false : true}
      onClick={() => {dispatch(clickStatisticsInfiniteButton())}}
    >
      Simulate
    </button>
  );
}