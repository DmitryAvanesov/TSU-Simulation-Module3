import React from "react";
import { useDispatch } from "react-redux";
import { clickStatisticsNormalButton } from "../../redux/actions";

export const StatisticsNormalButton = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => {dispatch(clickStatisticsNormalButton())}}>
      Simulate
    </button>
  );
}