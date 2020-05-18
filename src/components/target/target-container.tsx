import React from "react";
import { Image } from "../image";
import { TargetButton } from "./target-button";
import { TargetResult } from "./target-result";
import image from '../../images/target/index';

export const TargetContainer = () => {
  return (
    <>
      <Image src={image} />
      <TargetButton />
      <TargetResult />
    </>
  );
}