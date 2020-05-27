import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeStatisticsNormalAverage } from "../../redux/actions";

const Div = styled.div`
  & > * {
    margin-right: 10px;
  }
`;

const Input = styled.input`
  width: 150px;
`;

interface IState {
  statistics: {
    average: number
  }
}

export const StatisticsNormalAverage = () => {
  const average = useSelector((state: IState) => state.statistics.average);
  const dispatch = useDispatch();

  return (
    <Div>
      <span>Average</span>
      <Input
        type='number'
        step={0.01}
        value={average}
        onChange={e => dispatch(changeStatisticsNormalAverage(parseFloat(e.target.value)))}
      ></Input>
    </Div>
  );
}