import { IAction, CHANGE_YES_OR_NO_QUESTION, CLICK_YES_OR_NO_BUTTON, CHANGE_YES_OR_NO_PROBABILITY } from '../action-types';

interface IState {
  probability: number,
  resultText: string
}

const initialState: IState = {
  probability: 50,
  resultText: ''
};

const yesOrNoReducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case CHANGE_YES_OR_NO_QUESTION: {
      return {
        ...state,
        resultText: ''
      };
    }
    case CHANGE_YES_OR_NO_PROBABILITY: {
      let newProbability = action.payload.newProbability;

      if (action.payload.newProbability < 0) {
        newProbability = 0;
      }
      else if (action.payload.newProbability > 100) {
        newProbability = 100;
      }

      return {
        ...state,
        probability: newProbability
      };
    }
    case CLICK_YES_OR_NO_BUTTON: {
      return {
        ...state,
        resultText: Math.random() < state.probability * 0.01 ? 'Yes' : 'No'
      };
    }
    default: {
      return state;
    }
  }
};

export default yesOrNoReducer;