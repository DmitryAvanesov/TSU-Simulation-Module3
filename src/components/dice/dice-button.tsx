import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { clickDiceButton } from "../../redux/actions";

export const DiceButton = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(clickDiceButton())}>Roll the dice!</button>
  );
}