import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeYesOrNoQuestion } from "../redux/actions";
import styled, { css } from "styled-components";

interface IStyledProps {
  result: string
}

const DivResult = styled.div<IStyledProps>`
  color: white;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  line-height: 100px;
  text-align: center;

  ${props =>
    props.result == '' &&
    css`
      background-color: white;
    `};

  ${props =>
    props.result == 'Yes' &&
    css`
      background-color: green;
    `};

  ${props =>
    props.result == 'No' &&
    css`  
      background-color: red;
    `};
`;

interface IState {
  yesOrNo: {
    resultText: string
  }
}

export const YesOrNoResult = () => {
  const resultText = useSelector((state: IState) => state.yesOrNo.resultText);

  return (
    <DivResult result={resultText} className="yes-or-no-result">{resultText}</DivResult>
  );
}