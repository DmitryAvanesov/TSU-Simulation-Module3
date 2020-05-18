import React from "react";
import { YesOrNoQuestion } from "./yes-or-no-question"
import { YesOrNoButton } from "./yes-or-no-button";
import { YesOrNoResult } from "./yes-or-no-result";

export const YesOrNoContainer = () => {
  return (
    <>
      <YesOrNoQuestion />
      <YesOrNoButton />
      <YesOrNoResult />
    </>
  );
}