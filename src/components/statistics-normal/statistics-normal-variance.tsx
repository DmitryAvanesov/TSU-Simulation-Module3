import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeStatisticsNormalVariance } from "../../redux/actions";

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
    variance: number
  }
}

export const StatisticsNormalVariance = () => {
  const variance = useSelector((state: IState) => state.statistics.variance);
  const dispatch = useDispatch();

  return (
    <Div>
      <span>Variance</span>
      <Input
        type='number'
        step={0.01}
        value={variance}
        onChange={e => dispatch(changeStatisticsNormalVariance(parseFloat(e.target.value)))}
      ></Input>
    </Div>
  );
}