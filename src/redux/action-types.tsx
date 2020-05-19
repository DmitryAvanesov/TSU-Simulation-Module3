export const CHANGE_YES_OR_NO_QUESTION = 'CHANGE_YES_OR_NO_QUESTION';
export const CHANGE_YES_OR_NO_PROBABILITY = 'CHANGE_YES_OR_NO_PROBABILITY';
export const CLICK_YES_OR_NO_BUTTON = 'CLICK_YES_OR_NO_BUTTON';

export const CLICK_TARGET_BUTTON = 'CLICK_TARGET_BUTTON';

export const CHANGE_STATISTICS_PROBABILITY = 'CHANGE_STATISTICS_PROBABILITY';
export const CHANGE_STATISTICS_AMOUNT = 'CHANGE_STATISTICS_AMOUNT';
export const CLICK_STATISTICS_BUTTON = 'CLICK_STATISTICS_BUTTON';

export const CLICK_DICE_BUTTON = 'CLICK_DICE_BUTTON';

export const CLICK_STATISTICS_DISCRETE_BUTTON = 'CLICK_STATISTICS_DISCRETE_BUTTON';

export const CLICK_FOOTBALL_BUTTON = 'CLICK_FOOTBALL_BUTTON';

export const CHANGE_STATISTICS_PARAMETER = 'CHANGE_STATISTICS_PARAMETER';
export const CLICK_STATISTICS_INFINITE_BUTTON = 'CLICK_STATISTICS_INFINITE_BUTTON';

interface IChangeYesOrNoQuestion {
  type: typeof CHANGE_YES_OR_NO_QUESTION
}

interface IChangeYesOrNoProbability {
  type: typeof CHANGE_YES_OR_NO_PROBABILITY,
  payload: {
    newProbability: number
  }
}

interface IClickYesOrNoButton {
  type: typeof CLICK_YES_OR_NO_BUTTON
}

interface IClickTargetButton {
  type: typeof CLICK_TARGET_BUTTON
}

interface IChangeStatisticsProbability {
  type: typeof CHANGE_STATISTICS_PROBABILITY,
  payload: {
    curIndex: number,
    newProbability: number
  }
}

interface IChangeStatisticsAmount {
  type: typeof CHANGE_STATISTICS_AMOUNT,
  payload: {
    newAmount: number
  }
}

interface IClickStatisticsButton {
  type: typeof CLICK_STATISTICS_BUTTON
}

interface IClickDiceButton {
  type: typeof CLICK_DICE_BUTTON
}

interface IClickStatisticsDiscreteButton {
  type: typeof CLICK_STATISTICS_DISCRETE_BUTTON
}

interface IClickFootballButton {
  type: typeof CLICK_FOOTBALL_BUTTON
}

interface IChangeStatisticsParameter {
  type: typeof CHANGE_STATISTICS_PARAMETER,
  payload: {
    curIndex: number,
    newParameter: number
  }
}

interface IClickStatisticsInfiniteButton {
  type: typeof CLICK_STATISTICS_INFINITE_BUTTON
}

export type IAction =
  IChangeYesOrNoQuestion |
  IChangeYesOrNoProbability |
  IClickYesOrNoButton |
  IClickTargetButton |
  IChangeStatisticsProbability |
  IChangeStatisticsAmount |
  IClickStatisticsButton |
  IClickDiceButton |
  IClickStatisticsDiscreteButton |
  IClickFootballButton |
  IChangeStatisticsParameter |
  IClickStatisticsInfiniteButton;