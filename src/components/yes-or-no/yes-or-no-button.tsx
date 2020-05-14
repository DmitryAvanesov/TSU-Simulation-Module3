import React from "react";
import { useDispatch } from "react-redux";
import { clickYesOrNoButton } from "../../redux/actions";
import styled from "styled-components";

const Button = styled.button`
  display: block;
`;

export const YesOrNoButton = () => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(clickYesOrNoButton())}>
      Find out
    </Button>
  );
}