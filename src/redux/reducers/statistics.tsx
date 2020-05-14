import { IAction, CHANGE_STATISTICS_PROBABILITY, CHANGE_STATISTICS_AMOUNT, CLICK_STATISTICS_BUTTON } from '../action-types';

interface IState {
  numberOfProbabilities: number,
  probabilities: Array<number>,
  amount: number,
  result: Array<number>
}

const initialState: IState = {
  numberOfProbabilities: 5,
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
      const newResult = new Array<number>(0, 0, 0, 0, 0);

      for (let i = 0; i < state.amount; i++) {
        newResult[Math.floor(Math.random() * Math.floor(state.numberOfProbabilities))]++;
      }

      newResult.forEach((value, index) => {
        newResult[index] = parseFloat((value / state.amount * 100).toFixed(2));
      });

      return {
        ...state,
        result: newResult
      };
    }
    default: {
      return state;
    }
  }
};

export default statisticsReducer;