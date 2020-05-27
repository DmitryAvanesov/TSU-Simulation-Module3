import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clickStatisticsButton, clickStatisticsDiscreteButton } from "../../redux/actions";
import { IAction } from "../../redux/action-types";

interface IState {
  statistics: {
    probabilities: Array<number>
  }
}

export const StatisticsDiscreteButton = () => {
  const probabilitiesSum = useSelector((state: IState) => state.statistics.probabilities.reduce((a, b) => a + b));
  const dispatch = useDispatch();

  const dispatchAll = (actions: Array<IAction>) => {
    return actions.map(action => dispatch(action));
  };

  return (
    <button
      disabled={probabilitiesSum == 100 ? false : true}
      onClick={() => {dispatchAll(new Array<IAction>(clickStatisticsButton(), clickStatisticsDiscreteButton()))}}
    >
      Simulate
    </button>
  );
}