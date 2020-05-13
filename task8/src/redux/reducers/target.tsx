import { IAction, CHANGE_YES_OR_NO_QUESTION, CLICK_YES_OR_NO_BUTTON, CHANGE_YES_OR_NO_PROBABILITY, CLICK_TARGET_BUTTON } from '../action-types';

interface IState {
  points: number | undefined
}

const initialState: IState = {
  points: undefined
};

const yesOrNoReducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case CLICK_TARGET_BUTTON: {
      

      return {
        ...state,
        points: ''
      };
    }
    default: {
      return state;
    }
  }
};

export default yesOrNoReducer;