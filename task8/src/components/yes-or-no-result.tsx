import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeYesOrNoQuestion } from "../redux/actions";

interface IState {
  yesOrNo: {
    resultText: string
  }
}

export const YesOrNoResult = () => {
  const resultText = useSelector((state: IState) => state.yesOrNo.resultText);

  return (
    <div className="yes-or-no-result">{resultText}</div>
  );
}