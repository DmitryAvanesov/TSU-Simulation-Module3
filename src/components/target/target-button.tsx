import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { clickTargetButton } from "../../redux/actions";

const Button = styled.button`
  display: block;
`;

export const TargetButton = () => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(clickTargetButton())}>Shoot</Button>
  );
}