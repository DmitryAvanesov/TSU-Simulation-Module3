import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const Button = styled.button`
  display: block;
`;

export const YesOrNoQuestion = () => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch()}>Shoot</Button>
  );
}