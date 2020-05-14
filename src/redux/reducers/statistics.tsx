import { IAction, CHANGE_STATISTICS_PROBABILITY, CHANGE_STATISTICS_AMOUNT, CLICK_STATISTICS_BUTTON } from '../action-types';

interface IState {
  probabilities: Array<number>,
  amount: number,
  result: Array<number>
}

const initialState: IState = {
  probabilities: new Array<number>(20, 20, 20, 20, 20),
  amount: 10,
  result: new Array<number>(0, 0, 0, 0, 0)
};

const statisticsReducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case CHANGE_STATISTICS_PROBABILITY: {
      const newProbabilities = [...state.probabilities];
      let newProbability = action.payload.newProbability;

      if (newProbability < 0) {
        newProbability = 0;
      }
      else if (newProbability > 100) {
        newProbability = 100;
      }

      newProbabilities[action.payload.curIndex] = newProbability;

      return {
        ...state,
        probabilities: newProbabilities
      };
    }
    case CHANGE_STATISTICS_AMOUNT: {
      return {
        ...state,
        amount: action.payload.newAmount
      };
    }
    case CLICK_STATISTICS_BUTTON: {
      return {
        ...state
      };
    }
    default: {
      return state;
    }
  }
};

export default statisticsReducer;