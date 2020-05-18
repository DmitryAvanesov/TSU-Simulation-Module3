import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeYesOrNoQuestion, changeYesOrNoProbability } from "../../redux/actions";
import styled from "styled-components";

const Div = styled.div`
  && {
    width: max-content;

    & > * {
      margin-right: 10px;
    }
  }
`;

const Input = styled.input`
  width: 75px;
`;

interface IState {
  yesOrNo: {
    probability: number
  }
}

export const YesOrNoQuestion = () => {
  const probability = useSelector((state: IState) => state.yesOrNo.probability);
  const dispatch = useDispatch();

  return (
    <Div>
      <span>Should I</span>
      <input onChange={() => dispatch(changeYesOrNoQuestion())}></input>
      <span>with p(Yes) =</span>
      <Input type='number' step={0.1} value={probability} onChange={e => dispatch(changeYesOrNoProbability(parseFloat(e.target.value)))}></Input>
      <span>%</span>
    </Div>
  );
}