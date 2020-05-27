import React from "react";
import styled from "styled-components";

const Img = styled.img`
  height: 200px;
  display: block;
`;

interface IProps {
  src: string
}

export const Image = (props: IProps) => {
  return (
    <Img src={props.src} />
  );
}