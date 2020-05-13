import { IAction, CHANGE_YES_OR_NO_QUESTION, CLICK_YES_OR_NO_BUTTON, CHANGE_YES_OR_NO_PROBABILITY, CLICK_TARGET_BUTTON } from "./action-types";

export const changeYesOrNoQuestion = (): IAction => ({
  type: CHANGE_YES_OR_NO_QUESTION
});

export const changeYesOrNoProbability = (newProbability: number): IAction => ({
  type: CHANGE_YES_OR_NO_PROBABILITY,
  payload: {
    newProbability: newProbability
  }
});

export const clickYesOrNoButton = (): IAction => ({
  type: CLICK_YES_OR_NO_BUTTON
});

export const clickTargetButton = (): IAction => ({
  type: CLICK_TARGET_BUTTON
});