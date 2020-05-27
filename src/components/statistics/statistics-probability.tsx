import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeStatisticsProbability } from "../../redux/actions";

const Div = styled.div`
  & > * {
    margin-right: 10px;
  }
`;

const Input = styled.input`
  width: 225px;
`;

interface IState {
  statistics: {
    probabilities: Array<number>
  }
}

interface IProps {
  index: number
}

export const StatisticsProbability = (props: IProps) => {
  const probability = useSelector((state: IState) => state.statistics.probabilities[props.index]);
  const dispatch = useDispatch();

  return (
    <Div>
      <span>Probability of event {props.index}</span>
      <Input
        type='number'
        step={0.01}
        value={probability}
        onChange={e => dispatch(changeStatisticsProbability(props.index, parseFloat(e.target.value)))}
      ></Input>
      <span>%</span>
    </Div>
  );
}