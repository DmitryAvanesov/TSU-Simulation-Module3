import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeYesOrNoQuestion, changeYesOrNoProbability } from "../redux/actions";

interface IState {
  yesOrNo: {
    probability: number
  }
}

export const YesOrNoQuestion = () => {
  const probability = useSelector((state: IState) => state.yesOrNo.probability);
  const dispatch = useDispatch();

  return (
    <div>
      <span>Should I</span>
      <input onChange={() => dispatch(changeYesOrNoQuestion())}></input>
      <span>with p(Yes) =</span>
      <input type='number' step={0.1} value={probability} onChange={e => dispatch(changeYesOrNoProbability(parseFloat(e.target.value)))}></input>
      <span>%</span>
    </div>
  );
}