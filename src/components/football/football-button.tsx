import React from "react";
import { useDispatch } from "react-redux";
import { clickFootballButton } from "../../redux/actions";
import styled from "styled-components";

const Button = styled.button`
  display: block;
`;

export const FootballButton = () => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(clickFootballButton())}>Next game</Button>
  );
}