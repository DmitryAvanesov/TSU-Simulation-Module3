import { IAction, CHANGE_YES_OR_NO_QUESTION, CLICK_YES_OR_NO_BUTTON, CHANGE_YES_OR_NO_PROBABILITY, CLICK_TARGET_BUTTON, CHANGE_STATISTICS_PROBABILITY, CHANGE_STATISTICS_AMOUNT, CLICK_STATISTICS_BUTTON, CLICK_DICE_BUTTON, CLICK_STATISTICS_DISCRETE_BUTTON } from "./action-types";

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

export const changeStatisticsProbability = (curIndex: number, newProbability: number): IAction => ({
  type: CHANGE_STATISTICS_PROBABILITY,
  payload: {
    curIndex: curIndex,
    newProbability: newProbability
  }
});

export const changeStatisticsAmount = (newAmount: number): IAction => ({
  type: CHANGE_STATISTICS_AMOUNT,
  payload: {
    newAmount: newAmount
  }
});

export const clickStatisticsButton = (): IAction => ({
  type: CLICK_STATISTICS_BUTTON
});

export const clickDiceButton = (): IAction => ({
  type: CLICK_DICE_BUTTON
});

export const clickStatisticsDiscreteButton = (): IAction => ({
  type: CLICK_STATISTICS_DISCRETE_BUTTON
});