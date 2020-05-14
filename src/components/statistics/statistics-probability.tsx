import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeStatisticsProbability } from "../../redux/actions";

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
    <div>
      <span>Probability of event {props.index}</span>
      <input
        type='number'
        step={0.01}
        value={probability}
        onChange={e => dispatch(changeStatisticsProbability(props.index, parseFloat(e.target.value)))}
      ></input>
    </div>
  );
}