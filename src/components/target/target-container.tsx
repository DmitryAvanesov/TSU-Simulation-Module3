import React from "react";
import { TargetImage } from "./target-image";
import { TargetButton } from "./target-button";
import { TargetResult } from "./target-result";

export const TargetContainer = () => {
  return (
    <>
      <TargetImage />
      <TargetButton />
      <TargetResult />
    </>
  );
}