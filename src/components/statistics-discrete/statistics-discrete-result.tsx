import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Div = styled.div`
  && {
    margin-left: 60px;
  }
`;

interface IState {
  statistics: {
    averageApproximate: number | undefined,
    varianceApproximate: number | undefined,
    averageError: number | undefined,
    varianceError: number | undefined
  }
}

export const StatisticsDiscreteResult = () => {
  const averageApproximate = useSelector((state: IState) => state.statistics.averageApproximate);
  const varianceApproximate = useSelector((state: IState) => state.statistics.varianceApproximate);
  const averageError = useSelector((state: IState) => state.statistics.averageError);
  const varianceError = useSelector((state: IState) => state.statistics.varianceError);

  return (
    <Div>
      <div>
        Approximate average: {parseFloat(averageApproximate.toFixed(2))} (error = {parseFloat((averageError * 100).toFixed(2))}%)
      </div>
      <div>
        Approximate variance: {parseFloat(varianceApproximate.toFixed(2))} (error = {parseFloat((varianceError * 100).toFixed(2))}%)
      </div>
    </Div>
  );
}