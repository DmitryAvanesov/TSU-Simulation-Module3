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
    averageApproximate: number,
    varianceApproximate: number,
    averageError: number,
    varianceError: number,
    chiSquareTableValue: number,
    chiSquare: number
  }
}

export const StatisticsDiscreteResult = () => {
  const averageApproximate = useSelector((state: IState) => state.statistics.averageApproximate);
  const varianceApproximate = useSelector((state: IState) => state.statistics.varianceApproximate);
  const averageError = useSelector((state: IState) => state.statistics.averageError);
  const varianceError = useSelector((state: IState) => state.statistics.varianceError);
  const chiSquareTableValue = useSelector((state: IState) => state.statistics.chiSquareTableValue);
  const chiSquare = useSelector((state: IState) => state.statistics.chiSquare);

  return (
    <Div>
      <div>
        <b>Approximate average: {parseFloat(averageApproximate.toFixed(2))}</b> (error = {parseFloat((averageError * 100).toFixed(2))}%)
      </div>
      <div>
        <b>Approximate variance: {parseFloat(varianceApproximate.toFixed(2))}</b> (error = {parseFloat((varianceError * 100).toFixed(2))}%)
      </div>
      <div>
        Chi-square: {parseFloat(chiSquare.toFixed(2))} &gt; {chiSquareTableValue} is <b>{chiSquare > chiSquareTableValue ? 'true' : 'false'}</b>
      </div>
    </Div>
  );
}