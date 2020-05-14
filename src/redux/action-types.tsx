export const CHANGE_YES_OR_NO_QUESTION = 'CHANGE_YES_OR_NO_QUESTION';
export const CHANGE_YES_OR_NO_PROBABILITY = 'CHANGE_YES_OR_NO_PROBABILITY';
export const CLICK_YES_OR_NO_BUTTON = 'CLICK_YES_OR_NO_BUTTON';

export const CLICK_TARGET_BUTTON = 'CLICK_TARGET_BUTTON';

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

export type IAction = IChangeYesOrNoQuestion | IChangeYesOrNoProbability | IClickYesOrNoButton | IClickTargetButton;