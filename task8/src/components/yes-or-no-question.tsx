import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeYesOrNoQuestion, changeYesOrNoProbability } from "../redux/actions";
import styled from "styled-components";

const DivQuestionContainer = styled.div`
  * {
    margin-right: 10px;
  }
`;

const InputProbability = styled.input`
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
    <DivQuestionContainer>
      <span>Should I</span>
      <input onChange={() => dispatch(changeYesOrNoQuestion())}></input>
      <span>with p(Yes) =</span>
      <InputProbability type='number' step={0.1} value={probability} onChange={e => dispatch(changeYesOrNoProbability(parseFloat(e.target.value)))}></InputProbability>
      <span>%</span>
    </DivQuestionContainer>
  );
}