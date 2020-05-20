import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeStatisticsProbability, changeStatisticsInfiniteParameter } from "../../redux/actions";

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
    parameters: Array<number>
  }
}

interface IProps {
  index: number
}

export const StatisticsParameter = (props: IProps) => {
  const parameter = useSelector((state: IState) => state.statistics.parameters[props.index]);
  const dispatch = useDispatch();

  return (
    <Div>
      <span>Parameter {props.index}</span>
      <Input
        type='number'
        step={1}
        value={parameter}
        onChange={e => dispatch(changeStatisticsInfiniteParameter(props.index, parseInt(e.target.value)))}
      ></Input>
    </Div>
  );
}