import React from "react";
import { Image } from "../image";
import images from "../../images/football/index";
import { FootballResult } from "./football-result";
import { FootballButton } from "./football-button";
import styled from "styled-components";

const Div = styled.div`
  & > * {
    padding: 0 25px;
    display: inline-block;
    vertical-align: middle;
  }
`;

export const FootballContainer = () => {
  return (
    <>
      <Div>
        <Image src={images[0]} />
        <FootballResult />
        <Image src={images[1]} />
      </Div>
      <FootballButton />
    </>
  );
}