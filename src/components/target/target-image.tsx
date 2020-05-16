import React from "react";
import styled from "styled-components";
import image from '../../images/target/target.png';

const Img = styled.img`
  width: 200px;
  display: block;
`;

export const TargetImage = () => {
  return (
    <Img src={image} />
  );
}