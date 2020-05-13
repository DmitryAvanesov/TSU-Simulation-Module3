export const CHANGE_YES_OR_NO_QUESTION = 'CHANGE_YES_OR_NO_QUESTION';
export const CHANGE_YES_OR_NO_PROBABILITY = 'CHANGE_YES_OR_NO_PROBABILITY';
export const CLICK_YES_OR_NO_BUTTON = 'CLICK_YES_OR_NO_BUTTON';

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

export type IAction = IChangeYesOrNoQuestion | IChangeYesOrNoProbability | IClickYesOrNoButton;